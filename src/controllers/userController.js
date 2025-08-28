const userRepository = require("../repositories/userRepository");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

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

  async login(req, res) {
     console.log("REQ BODY:", req.body);
    const { email, password } = req.body;

    const existingEmail = await userRepository.findByEmail(email);
    if (!existingEmail) {
      return res.status(400).json({ error: "Usuário ou senha incorreta" });
    }

    const passwordCompare = await bcrypt.compare(
      password,
      existingEmail.password
    );
    if (!passwordCompare) {
      return res.status(400).json({ error: "Senha incorreta!" });
    } else {
      const auth = jwt.sign(
        { id: existingEmail.id, email: existingEmail.email },
        JWT_SECRET,
        { expiresIn: "1h" }
      );
      return res.status(200).json({ message: "Login realizado com sucesso!", token: auth });
    }
  }
}

module.exports = new UserController();
