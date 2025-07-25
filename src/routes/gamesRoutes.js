const express = require("express");
const router = express.Router()
const GameController = require("../controllers/gameController")

router.get('/games', GameController.index);
router.get('/games/:id', GameController.show);
router.post('/games', GameController.create);
router.put('/games/:id', GameController.update);
router.delete('/games/:id', GameController.destroy);

module.exports = router