const { DataTypes } = require("sequelize");
const connection = require("../database/database");
const Question = require("./Question");

const Answer = connection.define("answer", {
  resposta: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Answer.belongsTo(Question, {
  foreignKey: "question_id",
  onDelete: "CASCADE",
});

Answer.sync();

module.exports = Answer;
