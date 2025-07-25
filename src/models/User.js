const Sequelize = require("sequelize");
const connection = require("../database/connection");

const User = connection.define('users',{
    id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

User.sync({force: false});

module.exports = User;