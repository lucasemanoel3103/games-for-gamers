const connection = require("../database/connection");
const { DataTypes, Sequelize } = require("sequelize");

const Favorite = connection.define("favorite", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  game_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, 
{
  indexes: [
    {
      unique: true,
      fields: ['user_id', 'game_id']
    }
  ],
  timestamps: true
  
});

module.exports = Favorite;