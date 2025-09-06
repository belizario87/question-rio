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
      return res.redirect("/?success=true");
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Erro ao salvar pergunta.", details: err.message });
    }
  },
  async list(req, res) {
    try {
      const questions = await QuestionService.listQuestions();
      res.render("index", {
        questions,
        success: req.query.success === "true",
      });
    } catch (err) {
      console.error("Erro ao listar perguntas:", err);
      res.status(500).json({ error: "Erro ao listar perguntas." });
    }
  },

  async like(req, res) {
    try {
      const { id } = req.params;
      const question = await QuestionService.incrementLike(id);
      if (!question) {
        return res.status(404).json({ error: "Pergunta não encontrada" });
      }
      return res.json({ likes: question.likes });
    } catch (err) {
      return res.status(500).json({ error: "Erro ao dar like na pergunta" });
    }
  },

  async answer(req, res) {
    try {
      const { id } = req.params;
      const { resposta } = req.body;

      if (!resposta) {
        return res.status(400).json({ error: "Resposta é obrigatória" });
      }

      const question = await QuestionService.getQuestionById(id);
      if (!question) {
        return res.status(404).json({ error: "Pergunta não encontrada" });
      }

      await QuestionService.addAnswer(id, resposta);
      return res
        .status(200)
        .json({ message: "Resposta adicionada com sucesso" });
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Erro ao adicionar resposta", details: err.message });
    }
  },
};

module.exports = QuestionController;
