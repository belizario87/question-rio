const Sequelize = require("sequelize");

const connection = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;

// Note: Replace "database", "username", and "password" with your actual database credentials.
// Ensure you have the MySQL server running and the database created before running this code.
