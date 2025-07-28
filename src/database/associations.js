const User = require("../models/User");
const Game = require("../models/Game");

User.hasMany(Game, {foreignKey: "userId"});
Game.belongsTo(User, {foreignKey: "userId"});

