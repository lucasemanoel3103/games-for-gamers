const favoriteRepository = require("../repositories/favoriteRepository");

class FavoriteController {
  async favorite(req, res) {
    const { userId, gameId } = req.body;

    if (!userId || !gameId) {
      return res
        .status(404)
        .json({ error: "Os campos UserId e GameId são obrigatórios!" });
    }

    const alreadyFavorite = await favoriteRepository.verifyFavorite(
      userId,
      gameId
    );
    if (alreadyFavorite) {
      return res
        .status(400)
        .json({ error: "Esse jogo já está nos seus favoritos!" });
    }

    const newGameFavorite = await favoriteRepository.create(userId, gameId);
    return res.status(201).json("Jogo adicionado aos favoritos!");
  }

  async unfavorite(req, res) {
    try {
      const gameId = req.params.id;
      const userId = req.user?.id;

      const favorite = await favoriteRepository.verifyFavorite(userId, gameId);
      if (!favorite) {
        return res
          .status(404)
          .json({ error: "Esse jogo não está nos seus favoritos!" });
      }

      const unfavoriteGame = await favoriteRepository.remove(userId, gameId);
      return res.status(200).json({ message: "Jogo removido dos favoritos!" });
    } catch (error) {
      return res.status(500).json({error: "Erro interno do servidor! Tente novamente mais tarde."});
    }
  }

  async getFavorites(req, res) {
    try {
      const userId = req.user?.id;

      const favoriteGames = await favoriteRepository.findAll(userId);

      if (favoriteGames.length === 0) {
        return res.status(200).json({ error: "Não há jogos na sua lista de favoritos!" });
      } else {
        return res.status(200).json(favoriteGames);
      }
    } catch (error) {
        return res.status(500).json({error: "Erro interno do servidor! Tente novamente mais tarde."});
    }
  }

  async countFavoritesByUser(req, res){
    try {
        const  userId = req.user?.id;

        const favoriteGames = await favoriteRepository.countByUser(userId);
        return res.status(200).json({count: favoriteGames})
    } catch (error) {
        return res.status(500).json({error: "Erro interno do servidor! Tente novamente mais tarde."});
    }
  }

  async countFavoritesByGame(req, res){
    try {
        const gameId = req.params.id;

        const favoriteByGames = await favoriteRepository.countByGame(gameId); 
        return res.status(200).json({count: favoriteByGames});
    } catch (error) {
         return res.status(500).json({error: "Erro interno do servidor! Tente novamente mais tarde."});
    }
  }
}

module.exports = new FavoriteController();
