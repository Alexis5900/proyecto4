const express = require('express');
const router = express.Router();
const reservasController = require('../controllers/reservasController');

/**
 * @swagger
 * /api/reservas:
 *   post:
 *     summary: Crear una nueva reserva
 *     description: Permite crear una nueva reserva de hotel.
 *     tags:
 *       - Reservas
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               hotel:
 *                 type: string
 *                 example: "Hotel Molina"
 *               tipo_habitacion:
 *                 type: string
 *                 example: "Doble"
 *               num_huespedes:
 *                 type: integer
 *                 example: 2
 *               fecha:
 *                 type: string
 *                 format: date
 *                 example: "2025-02-10"
 *               estado:
 *                 type: string
 *                 example: "Confirmada"
 *     responses:
 *       201:
 *         description: Reserva creada con éxito
 */
router.post('/', reservasController.create);

/**
 * @swagger
 * /api/reservas:
 *   get:
 *     summary: Obtener todas las reservas o aplicar filtros
 *     description: Retorna la lista de todas las reservas o permite aplicar filtros.
 *     tags:
 *       - Reservas
 *     parameters:
 *       - in: query
 *         name: hotel
 *         schema:
 *           type: string
 *         description: Filtrar por nombre del hotel.
 *       - in: query
 *         name: tipo_habitacion
 *         schema:
 *           type: string
 *         description: Filtrar por tipo de habitación.
 *       - in: query
 *         name: estado
 *         schema:
 *           type: string
 *         description: Filtrar por estado de la reserva.
 *       - in: query
 *         name: num_huespedes
 *         schema:
 *           type: integer
 *         description: Filtrar por número exacto de huéspedes.
 *       - in: query
 *         name: num_huespedes_min
 *         schema:
 *           type: integer
 *         description: Filtrar por número mínimo de huéspedes.
 *       - in: query
 *         name: num_huespedes_max
 *         schema:
 *           type: integer
 *         description: Filtrar por número máximo de huéspedes.
 *     responses:
 *       200:
 *         description: Lista de reservas obtenida con éxito
 */
router.get('/', reservasController.filter);

/**
 * @swagger
 * /api/reservas/{id}:
 *   get:
 *     summary: Obtener una reserva por ID
 *     description: Retorna la reserva correspondiente al ID especificado.
 *     tags:
 *       - Reservas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la reserva a obtener.
 *     responses:
 *       200:
 *         description: Reserva obtenida con éxito
 *       404:
 *         description: Reserva no encontrada
 */
router.get('/:id', reservasController.readOne);

/**
 * @swagger
 * /api/reservas/{id}:
 *   put:
 *     summary: Actualizar una reserva
 *     description: Permite actualizar los datos de una reserva existente.
 *     tags:
 *       - Reservas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la reserva a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               hotel:
 *                 type: string
 *                 example: "Hotel Molina"
 *               tipo_habitacion:
 *                 type: string
 *                 example: "Suite"
 *               num_huespedes:
 *                 type: integer
 *                 example: 3
 *               fecha:
 *                 type: string
 *                 format: date
 *                 example: "2025-02-15"
 *               estado:
 *                 type: string
 *                 example: "Pendiente"
 *     responses:
 *       200:
 *         description: Reserva actualizada con éxito
 *       404:
 *         description: Reserva no encontrada
 */
router.put('/:id', reservasController.update);

/**
 * @swagger
 * /api/reservas/{id}:
 *   delete:
 *     summary: Eliminar una reserva
 *     description: Permite eliminar una reserva por su ID.
 *     tags:
 *       - Reservas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la reserva a eliminar.
 *     responses:
 *       200:
 *         description: Reserva eliminada con éxito
 *       404:
 *         description: Reserva no encontrada
 */
router.delete('/:id', reservasController.delete);

module.exports = router;
