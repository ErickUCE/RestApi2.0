const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Erick API",
    description: "Simple API showing 'Erick Tipan RestApi with JS'",
    version: "1.0.0"
  },
  paths: {
    "/": {
      get: {
        summary: "Show a welcome message",
        description: "Greetings back witH 'Erick Tipan RestApi with JS'",
        responses: {
          200: {
            description: "SUCCESSFUL GREETING",
            content: {
              "application/json": {
                example: {
                  message: "Erick Tipan RestApi with JS"
                }
              }
            }
          }
        }
      }
    }
  }
};

const app = express();

// Definir la ruta para Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Crear una ruta para la API REST
app.get('/', (req, res) => {
  res.json({ message: 'Erick Tipan RestApi with JS' });
});

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
  console.log(`Documentación Swagger disponible en http://localhost:${port}/api-docs`);
});
