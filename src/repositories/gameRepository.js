const Game = require("../models/Game");

class GameRepository{
    findAll(){
        return Game.findAll()
    }

    findById(id){
        return Game.findByPk(id)
    }

    create(game) {
        return Game.create(game)
    }

    update(game, id ) {
        return Game.update(game, {
            where: {id}
        });
    }

    delete(id){
        return Game.destroy({
            where: {id}
        });
    }
};

module.exports = GameRepository;