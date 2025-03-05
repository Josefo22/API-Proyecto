import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database.js';
import clienteRoutes from './routes/cliente.routes.js';

// Configure environment variables
dotenv.config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/clientes', clienteRoutes);

// Database connection and server start
const startServer = async () => {
  try {
    // Authenticate database connection
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida correctamente.');

    // Sync models (creates tables if they don't exist)
    await sequelize.sync();
    console.log('Modelos sincronizados con la base de datos.');

    // Start server
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error('No se pudo iniciar el servidor:', error);
    process.exit(1);
  }
};

startServer();