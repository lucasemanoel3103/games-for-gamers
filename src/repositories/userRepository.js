const User = require("../models/User");

class UserRepository{
    findAll(){
        return User.findAll()
    }

    findById(id){
        return User.findByPk(id)
    }

    findByEmail(email){
       return User.findOne({ where: { email } })
    }

    create(user) {
        return User.create(user)
    }

    update(user, id ) {
        return User.update(user, {
            where: {id}
        });
    }

    delete(id){
        return User.destroy({
            where: {id}
        });
    }
};

module.exports = new UserRepository();