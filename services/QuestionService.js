// services/QuestionService.js
const QuestionDAO = require('../daos/QuestionDAO');
const QuestionDTO = require('../dtos/QuestionDTO');

class QuestionService {
  async createQuestion(data) {
    const question = await QuestionDAO.create(data);
    return new QuestionDTO(question);
  }

  async listQuestions() {
    const questions = await QuestionDAO.findAll();
    return questions.map(q => new QuestionDTO(q));
  }
}

module.exports = new QuestionService();
