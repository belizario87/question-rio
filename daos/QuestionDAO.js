// daos/QuestionDAO.js
const Question = require("../model/Question");

class QuestionDAO {
  async create(data) {
    return await Question.create(data);
  }
  async findAll() {
    return await Question.findAll({
      order: [["id", "DESC"]],
    });
  }
  async incrementLike(id) {
    const question = await Question.findByPk(id);
    if (!question) return null;
    question.likes += 1;
    await question.save();
    return question;
  }

  async addAnswer(questionId, resposta) {
    const Answer = require("../model/Answer");
    const question = await Question.findByPk(questionId);
    if (!question) return null;

    return await Answer.create({
      resposta,
      question_id: questionId,
    });
  }

  async findById(id) {
    return await Question.findByPk(id);
  }
}

module.exports = new QuestionDAO();
