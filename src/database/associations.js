const User = require("../models/User");
const Game = require("../models/Game");
const Favorite = require("../models/Favorite");

User.hasMany(Game, {foreignKey: "userId"});
Game.belongsTo(User, {foreignKey: "userId"});
User.belongsToMany(Game, { through: Favorite, foreignKey: 'user_id', as: 'favoriteGames' });
Game.belongsToMany(User, { through: Favorite, foreignKey: 'game_id', as: 'usersWhoFavorited' });

