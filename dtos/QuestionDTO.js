// dtos/QuestionDTO.js
class QuestionDTO {
  constructor({ id, titulo, descricao, createdAt, updatedAt }) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = QuestionDTO;
