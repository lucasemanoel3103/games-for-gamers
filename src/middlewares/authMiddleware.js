const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

function auth(req, res, next){
    const authToken = req.headers['authorization'];

    if(authToken){

        const bearer = authToken.split(' ');
        let token = bearer[1];

        jwt.verify(token, JWT_SECRET, (err, data) => {
            if(err){
                res.status(401);
                res.json({err: "Token inválido"});
            }else{
                req.token = token;
                req.user = data;
                next();
            }
        })
    }else{
        res.status(401);
        res.json({err: "Token inválido"});
    }
}

module.exports = auth;