// daos/QuestionDAO.js
const Question = require('../model/Question');

class QuestionDAO {
  async create(data) {
    return await Question.create(data);
  }

  async findAll() {
    return await Question.findAll({ order: [['id', 'DESC']] });
  }
}

module.exports = new QuestionDAO();
