const Favorite = require("../models/Favorite");

class FavoriteRepository{
    create(userId, gameId){
        return Favorite.create({ user_id: userId, game_id: gameId })
    }

    delete(userId, gameId){
        return Favorite.destroy({ where: {user_id: userId, game_id: gameId}})
    }

    verifyFavorite(userId, gameId){
        return Favorite.findOne({where: {user_id: userId, game_id: gameId}})
    }

    findAll(userId){
        return Favorite.findAll({where: {user_id: userId}})
    }

    countByGame(gameId){
        return Favorite.count({where: {game_id: gameId}})
    }

    countByUser(userId){
        return Favorite.count({where: {user_id: userId}})
    }
}

module.exports = new FavoriteRepository();
