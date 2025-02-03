const express = require('express');
const dotenv = require('dotenv');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Configuración de Swagger
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API de Reservas Hoteleras",
            version: "1.0.0",
            description: "Documentación de la API para la gestión de reservas hoteleras",
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Servidor de Desarrollo"
            }
        ],
    },
    apis: ["./routes/*.js"], // Importante: Aquí indicamos que buscará documentación en los archivos de rutas
};

// Inicializar Swagger con las opciones
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Importar las rutas de reservas
app.use('/api/reservas', require('./routes/reservas'));

// Ruta principal
app.get('/', (req, res) => {
    res.send('API de Reservas Hoteleras funcionando correctamente');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
    console.log(`Documentación disponible en: http://localhost:${port}/api-docs`);
});
