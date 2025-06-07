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
});

Question.sync();

module.exports = Question;
