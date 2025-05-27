const express = require("express");

const app = express();

const PORT = 8787;
app.listen(PORT, function () {
  console.log(`servidor rodando na porta ${PORT}`);
});
