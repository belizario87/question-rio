// controllers/QuestionController.js
const QuestionService = require("../services/QuestionService");

const QuestionController = {
  async create(req, res) {
    try {
      if (req.method === "GET") {
        return res.render("pergunta");
      }
      const { titulo, descricao } = req.body;
      if (!titulo || !descricao) {
        return res
          .status(400)
          .json({ error: "Título e descrição são obrigatórios." });
      }
      await QuestionService.createQuestion({ titulo, descricao });
      return res.send("Pergunta salva com sucesso!");
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Erro ao salvar pergunta.", details: err.message });
    }
  },

  async list(req, res) {
    try {
      const questions = await QuestionService.listQuestions();
      res.render("index", { questions });
    } catch (err) {
      res.status(500).json({ error: "Erro ao listar perguntas." });
    }
  },
};

module.exports = QuestionController;
