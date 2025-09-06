// model/Question.js
const { DataTypes } = require("sequelize");
const connection = require("../database/database");

const Question = connection.define("Question", {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
});

// Altere para evitar o DROP TABLE
Question.sync({ alter: true })
  .then(() => {
    console.log("Tabela Questions sincronizada com sucesso!");
  })
  .catch((error) => {
    console.error("Erro ao sincronizar tabela Questions:", error);
  });

module.exports = Question;
