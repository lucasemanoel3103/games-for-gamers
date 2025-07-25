const gameRepository = require("../repositories/gameRepository");

class GameController {
  async index(req, res) {
    try {
      const row = await gameRepository.findAll();

      if (row.length === 0) {
        return res
          .status(404)
          .json({ error: "Não há jogos cadastrados no sistema!" });
      }

      res.json(row);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Erro ao buscar os jogos", detalhes: error.message });
    }
  }

  async show(req, res) {
    try {
      const id = req.params.id;
      const game = await gameRepository.findById(id);

      if (!game) {
        return res.status(404).json({ error: "Jogo não encontrado!" });
      }

      res.json(game);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Erro ao buscar o jogo", detalhes: error.message });
    }
  }

  async create(req, res) {
    const { title, year, producer, price } = req.body;
    const game = { title, year, producer, price };

    if (!game.title || !game.year || !game.producer || !game.price) {
      return res.status(400).json({ error: "Campos obrigatórios ausentes." });
    }

    const row = await gameRepository.create(game);
    return res.status(201).json(row);
  }

  async update(req, res) {
    const game = req.body;
    const id = req.params.id;

    if (id === undefined) {
      return res
        .status(400)
        .json({ error: "Esse jogo não está cadastrado em sua biblioteca!" });
    }

    const row = await gameRepository.update(game, id);
    return res.status(200).json(row);
  }

  async destroy(req, res){
    const id = req.params.id;

    if (id === undefined) {
      return res
        .status(400)
        .json({ error: "ID não informado!" });
    }

    const game = await gameRepository.findById(id);
    if(!game){
      return res.status(404).json({error: "Jogo não encontrado!"})
    }

    const deleteCount = await gameRepository.destroy(id);
    return res.status(204).send();
  }
}

module.exports = new GameController();
