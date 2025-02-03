const fs = require('fs').promises;
const path = require('path');

// Ruta del archivo JSON donde se almacenan las reservas
const reservasFilePath = path.join(__dirname, '../data/reservas.json');

// Función para leer las reservas desde el archivo JSON
const leerReservas = async () => {
    try {
        const data = await fs.readFile(reservasFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Error al leer el archivo de reservas:", error);
        return []; // Si hay un error, devuelve un array vacío
    }
};

// Función para escribir en el archivo JSON
const escribirReservas = async (reservas) => {
    try {
        await fs.writeFile(reservasFilePath, JSON.stringify(reservas, null, 2));
    } catch (error) {
        console.error("Error al escribir en el archivo de reservas:", error);
    }
};

// =============================================
// a. Crear una nueva reserva (POST)
// =============================================
exports.create = async (req, res) => {
    const { hotel, tipo_habitacion, num_huespedes, fecha, estado } = req.body;

    if (!hotel || !tipo_habitacion || !num_huespedes || !fecha || !estado) {
        return res.status(400).json({ msg: "Todos los campos son obligatorios" });
    }

    const reservas = await leerReservas();
    const nuevaReserva = {
        id: reservas.length ? reservas[reservas.length - 1].id + 1 : 1,
        hotel: hotel.trim(),
        tipo_habitacion: tipo_habitacion.trim(),
        num_huespedes: parseInt(num_huespedes),
        fecha: fecha.trim(),
        estado: estado.trim()
    };

    reservas.push(nuevaReserva);
    await escribirReservas(reservas);

    res.status(201).json({ msg: "Reserva creada con éxito.", data: nuevaReserva });
};

// =============================================
// b. Obtener todas las reservas o aplicar filtros (GET)
// =============================================
exports.filter = async (req, res) => {
    console.log("Aplicando filtros con parámetros:", req.query);

    let resultado = await leerReservas();

    // Filtrar por hotel
    if (req.query.hotel) {
        const hotelBuscado = req.query.hotel.trim().toLowerCase();
        resultado = resultado.filter(r => r.hotel && r.hotel.trim().toLowerCase() === hotelBuscado);
    }

    // Filtrar por tipo de habitación
    if (req.query.tipo_habitacion) {
        const tipoHabitacionBuscado = req.query.tipo_habitacion.trim().toLowerCase();
        resultado = resultado.filter(r => r.tipo_habitacion && r.tipo_habitacion.trim().toLowerCase() === tipoHabitacionBuscado);
    }

    // Filtrar por estado
    if (req.query.estado) {
        const estadoBuscado = req.query.estado.trim().toLowerCase();
        resultado = resultado.filter(r => r.estado && r.estado.trim().toLowerCase() === estadoBuscado);
    }

    // Filtrar por número de huéspedes
    if (req.query.num_huespedes) {
        const numHuespedesBuscado = parseInt(req.query.num_huespedes);
        if (!isNaN(numHuespedesBuscado)) {
            resultado = resultado.filter(r => r.num_huespedes === numHuespedesBuscado);
        } else {
            return res.status(400).json({ msg: "El parámetro num_huespedes debe ser un número válido." });
        }
    }

    // Si no hay resultados, devolver error 404
    if (resultado.length === 0) {
        return res.status(404).json({ msg: "No se encontraron reservas con los filtros aplicados." });
    }

    res.json({ msg: "Reservas filtradas con éxito.", data: resultado });
};

// =============================================
// c. Obtener una reserva específica por ID (GET)
// =============================================
exports.readOne = async (req, res) => {
    const reservaId = parseInt(req.params.id);
    const reservas = await leerReservas();
    const reserva = reservas.find(r => r.id === reservaId);

    if (!reserva) {
        return res.status(404).json({ msg: "Reserva no encontrada." });
    }

    res.json({ msg: "Reserva obtenida con éxito.", data: reserva });
};

// =============================================
// d. Actualizar una reserva específica (PUT)
// =============================================
exports.update = async (req, res) => {
    const reservaId = parseInt(req.params.id);
    const reservas = await leerReservas();
    const index = reservas.findIndex(r => r.id === reservaId);

    if (index === -1) {
        return res.status(404).json({ msg: "Reserva no encontrada." });
    }

    const { hotel, tipo_habitacion, num_huespedes, fecha, estado } = req.body;

    reservas[index] = {
        ...reservas[index],
        hotel: hotel ? hotel.trim() : reservas[index].hotel,
        tipo_habitacion: tipo_habitacion ? tipo_habitacion.trim() : reservas[index].tipo_habitacion,
        num_huespedes: num_huespedes ? parseInt(num_huespedes) : reservas[index].num_huespedes,
        fecha: fecha ? fecha.trim() : reservas[index].fecha,
        estado: estado ? estado.trim() : reservas[index].estado
    };

    await escribirReservas(reservas);
    res.json({ msg: "Reserva actualizada con éxito.", data: reservas[index] });
};


// =============================================
// e. Eliminar una reserva específica (DELETE)
// =============================================
exports.delete = async (req, res) => {
    const reservaId = parseInt(req.params.id);
    let reservas = await leerReservas();
    const index = reservas.findIndex(r => r.id === reservaId);

    if (index === -1) {
        return res.status(404).json({ msg: "Reserva no encontrada." });
    }

    reservas.splice(index, 1);
    await escribirReservas(reservas);
    res.json({ msg: "Reserva eliminada con éxito." });
};