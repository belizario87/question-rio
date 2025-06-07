# Projeto Questionário

Sistema de perguntas e respostas desenvolvido com Node.js, Express, EJS e MySQL.

## 🚀 Tecnologias

- Node.js
- Express
- EJS (View Engine)
- MySQL
- Sequelize (ORM)
- Bootstrap

## 📋 Pré-requisitos

- Node.js instalado
- MySQL instalado e rodando
- NPM ou Yarn

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone <seu-repositorio>
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações do banco de dados

4. Rode o projeto:

```bash
npm start
```

## 📍 Rotas

### Páginas (Views)

- `GET /` - Lista todas as perguntas
- `GET /salvarpergunta` - Formulário para criar nova pergunta

### API

- `POST /salvarpergunta` - Salva uma nova pergunta
  ```json
  {
    "titulo": "Sua pergunta",
    "descricao": "Descrição detalhada"
  }
  ```

## 🗄️ Estrutura do Projeto

```
├── controllers/     # Controladores da aplicação
├── daos/           # Camada de acesso ao banco
├── database/       # Configuração do banco
├── dtos/          # Objetos de transferência de dados
├── models/        # Modelos do Sequelize
├── public/        # Arquivos estáticos
├── routes/        # Rotas da aplicação
├── services/      # Lógica de negócio
└── views/         # Templates EJS
```
