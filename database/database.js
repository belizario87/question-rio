require("dotenv").config();
const Sequelize = require("sequelize");

const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    define: {
      timestamps: true, // Isso garante que createdAt e updatedAt serão usados
      underscored: true, // Usa snake_case em vez de camelCase para nomes de colunas
    },
  }
);

module.exports = connection;

// Note: Replace "perguntasrio", "username", and "password" with your actual database credentials.
// Ensure you have the MySQL server running and the database created before running this code.
