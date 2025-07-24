const express = require("express");
const app = express();
const gamesRoutes = require("./src/routes/gamesRoutes")
const dotenv = require("dotenv")
const connection = require("./src/database/connection")

dotenv.config();
app.use(express.json());

const PORT = process.env.PORT;

app.use("/api", gamesRoutes);

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