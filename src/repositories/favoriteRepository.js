const Favorite = require("../models/Favorite");
const Game = require("../models/Game");

class FavoriteRepository{
    create(userId, gameId){
        return Favorite.create({ user_id: userId, game_id: gameId })
    }

    remove(userId, gameId){
        return Favorite.destroy({ where: {user_id: userId, game_id: gameId}})
    }

    verifyFavorite(userId, gameId){
        return Favorite.findOne({where: {user_id: userId, game_id: gameId}})
    }

    findAll(userId){
        return Favorite.findAll({where: {user_id: userId}, include: {model: Game, as: "game", attributes: ['title']}});
    }

    countByGame(gameId){
        return Favorite.count({where: {game_id: gameId}})
    }

    countByUser(userId){
        return Favorite.count({where: {user_id: userId}})
    }
}

module.exports = new FavoriteRepository();
