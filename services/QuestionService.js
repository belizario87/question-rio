// services/QuestionService.js
const QuestionDAO = require("../daos/QuestionDAO");
const QuestionDTO = require("../dtos/QuestionDTO");

class QuestionService {
  async createQuestion(data) {
    const question = await QuestionDAO.create(data);
    return new QuestionDTO(question);
  }
  async listQuestions() {
    const questions = await QuestionDAO.findAll();
    return questions.map((q) => new QuestionDTO(q));
  }
  async incrementLike(id) {
    return await QuestionDAO.incrementLike(id);
  }

  async addAnswer(questionId, resposta) {
    return await QuestionDAO.addAnswer(questionId, resposta);
  }

  async getQuestionById(id) {
    return await QuestionDAO.findById(id);
  }
}

module.exports = new QuestionService();
