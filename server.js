const express = require("express");
const app = express();
const gamesRoutes = require("./src/routes/gamesRoutes");
const dotenv = require("dotenv");
const connection = require("./src/database/connection");
const usersRoutes = require("./src/routes/usersRoutes");

dotenv.config();
app.use(express.json());

const User = require("./src/models/User");
const Game = require("./src/models/Game");

const associations = require("./src/database/associations");

const PORT = process.env.PORT;

app.use("/api", gamesRoutes);
app.use("/api", usersRoutes);

connection.sync()
  .then(() => {
    console.log("Banco sincronizado!");
    app.listen(PORT, () => {
      console.log(`API rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao sincronizar banco:", err);
  });