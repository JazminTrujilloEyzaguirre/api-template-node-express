const express = require('express');
const app = express();

// middleware
app.use(express.json());

// Rutas
const someRoutes = require('./routes/someRoutes');

app.use('/some', someRoutes);


// Manejador de errores
const { notFoundErrorHandler, globalErrorHandler } = require('./utils/errorHandlers');
app.use(notFoundErrorHandler);
app.use(globalErrorHandler);

module.exports = app;