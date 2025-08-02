const express = require("express");
const router = express.Router();
const GameController = require("../controllers/gameController");
const auth = require("../middlewares/authMiddleware");

router.get('/games', auth, GameController.index);
router.get('/games/:id', auth, GameController.show);
router.post('/games', auth, GameController.create);
router.put('/games/:id', auth,  GameController.update);
router.delete('/games/:id', auth, GameController.destroy);

module.exports = router