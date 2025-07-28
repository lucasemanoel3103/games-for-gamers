const userRepository = require("../repositories/userRepository");
const bcrypt = require("bcryptjs");

class UserController {
  async create(req, res) {
    const { name, email, password } = req.body;

    const existingEmail = await userRepository.findByEmail(email);
    if (existingEmail) {
      return res.status(400).json({ error: "E-mail já cadastrado!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = { name, email, password: hash };

    const newUser = await userRepository.create(user);
    return res.status(201).json(newUser);
  }
}

module.exports = new UserController();
