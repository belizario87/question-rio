const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
//Database

connection
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados realizada com sucesso!");
  })
  .catch((error) => {
    console.error("Erro ao conectar ao banco de dados:", error);
  });

//estou usando p/ o express usar o ejs como View Engine
app.set("view engine", "ejs");

app.use(express.static("public"));

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const questionRoutes = require("./routes/questionRoutes");

app.use("/", questionRoutes);

const PORT = 8787;

app.listen(PORT, function () {
  console.log(`servidor rodando na porta ${PORT}`);
});
