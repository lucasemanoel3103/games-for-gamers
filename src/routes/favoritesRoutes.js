const express = require("express");
const router = express.Router();
const FavoriteController = require("../controllers/favoriteController");
const auth = require("../middlewares/authMiddleware");


router.post("/favorites", auth, FavoriteController.favorite);
router.delete("/favorites/:id", auth, FavoriteController.unfavorite);
router.get("/favorites", auth, FavoriteController.getFavorites);
router.get("/favorites/count/user", auth, FavoriteController.countFavoritesByUser);
router.get("/favorites/count/game/:id", auth, FavoriteController.countFavoritesByGame);

module.exports = router