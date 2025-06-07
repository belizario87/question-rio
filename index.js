const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//estou usando p/ o express usar o ejs como View Engine
app.set("view engine", "ejs");

app.use(express.static("public"));

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/fazerpergunta", (req, res) => {
  res.render("pergunta");
});

app.post("/salvarpergunta", (req, res) => {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
  res.send(
    "Formulario recebido! titulo " + titulo + " " + "descricao " + descricao
  );
});

require("dotenv").config();
const PORT = process.env.PORT || 8787;

app.listen(PORT, function () {
  console.log(`Servidor rodando na porta ${PORT}`);
});
