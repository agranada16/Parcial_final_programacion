import { Sequelize } from "sequelize";

// Configuración de conexión a la base de datos
const db = new Sequelize(
  "programacionv", // Nombre de la base de datos
  "root", // Nombre de usuario de la base de datos
  process.env.DB_PASSWORD || "", // Contraseña de la base de datos (puede ser una cadena vacía si no se proporciona)
  {
    host: process.env.DB_HOST || "localhost", // Host de la base de datos (por defecto, localhost)
    port: process.env.DB_PORT || 3306, // Puerto de la base de datos (por defecto, 3306 para MySQL)
    dialect: "mysql", // Dialecto de la base de datos (en este caso, MySQL)
    
    // Agregar estampas de tiempo a cada nuevo registro
    define: {
      timestamps: true,
    },
    
    // Configuración del pool de conexiones
    // Se permiten un máximo de 5 conexiones simultáneas por usuario
    // Se cierra una conexión si no se usa durante 10 segundos
    // Se espera un máximo de 30 segundos para obtener una conexión
    pool: {
      max: 5,
      min: 0,
      idle: 10000, // Tiempo de espera para liberar una conexión (10 segundos)
      acquire: 30000, // Tiempo de espera para obtener una conexión (30 segundos)
    },
    
    // Deshabilitar los alias de operadores obsoletos
    operatorsAliases: false,
  }
);

export default db;
