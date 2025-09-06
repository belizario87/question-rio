// dtos/QuestionDTO.js
class QuestionDTO {
  constructor({ id, titulo, descricao, likes, answers, createdAt, updatedAt }) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.likes = likes || 0;
    this.respostas = answers || [];
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = QuestionDTO;
