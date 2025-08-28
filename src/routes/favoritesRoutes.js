const express = require("express");
const router = express.Router();
const FavoriteController = require("../controllers/favoriteController");
const auth = require("../middlewares/authMiddleware");


router.post("/favorites", auth, FavoriteController.favorite);
router.delete("/favorites/:id", auth, FavoriteController.unfavorite);
router.get("/favorites", auth, FavoriteController.getFavorites);
router.get("/favorites/count/user", FavoriteController.countFavoritesByUser);
router.get("/favorites/count/game/:id", FavoriteController.countFavoritesByGame);

module.exports = router