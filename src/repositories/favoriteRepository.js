const Favorite = require("../models/Favorite");

class FavoriteRepository{
    async favorite(userId, gameId){
        return Favorite.create({ user_id: userId, game_id: gameId })
    }

    async unfavorite(userId, gameId){
        return Favorite.destroy({ where: {user_id: userId, game_id: gameId}})
    }

    async verifyFavorite(userId, gameId){
        return Favorite.findOne({where: {user_id: userId, game_id: gameId}})
    }

    async getFavoritesByUser(userId){
        return Favorite.findAll({where: {user_id: userId}})
    }

    async countFavoritesByGame(gameId){
        return Favorite.count({where: {game_id: gameId}})
    }
    
    async countFavoritesByUser(userId){
        return Favorite.count({where: {user_id: userId}})
    }
}

module.exports = new FavoriteRepository();