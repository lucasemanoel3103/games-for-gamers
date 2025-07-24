const Sequelize = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: 'mysql'
  }
);

connection.authenticate()
  .then(() => console.log('Conectado ao banco com Sequelize'))
  .catch(err => console.error('Erro ao conectar:', err));

module.exports = connection;