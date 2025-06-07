const Sequelize = require("sequelize");

const connection = new Sequelize("perguntasrio", "root", "senha123", {
  host: "localhost",
  dialect: "mysql",
  logging: console.log, // Isso vai mostrar as queries SQL no console
  define: {
    timestamps: true, // Isso garante que createdAt e updatedAt serão usados
    underscored: true, // Usa snake_case em vez de camelCase para nomes de colunas
  },
});

module.exports = connection;

// Note: Replace "perguntasrio", "username", and "password" with your actual database credentials.
// Ensure you have the MySQL server running and the database created before running this code.
