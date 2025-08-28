const express = require("express");
const app = express();
const gamesRoutes = require("./src/routes/gamesRoutes");
const dotenv = require("dotenv");
const connection = require("./src/database/connection");
const usersRoutes = require("./src/routes/usersRoutes");
const favoritesRoutes = require("./src/routes/favoritesRoutes");

dotenv.config();
app.use(express.json());

require("./src/database/associations");

const PORT = process.env.PORT;

app.use("/api", gamesRoutes);
app.use("/api", usersRoutes);
app.use("/api", favoritesRoutes);

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