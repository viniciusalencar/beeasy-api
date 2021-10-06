const User = require('../models/User');
const bcrypt = require('bcryptjs');
const yup = require('yup');
class UserController {

  show(req, res) {
    const users = ["Vinicius", "Rafael"]
    return res.status(200).json({
      error: false,
      users
    });
  };

  async store(req, res) {
    const { name, email, password, confirmPassword } = req.body;

    const validationSchema = yup.object().shape({
      name: yup.string().required('Campo obrigatório'),
      email: yup.string().email().required('Campo obrigatório'),
      password: yup.string().required('Campo obrigatório'),
      confirmPassword: yup.string().required('Campo obrigatório'),
    });

    if (!(await validationSchema.isValid(req.body))) {
      return res.status(400).json({
        error: true,
        message: 'Dados inválidos',
      });
    };

    if (password !== confirmPassword) {
      return res.status(400).json({
        error: true,
        message: 'Senha e confirmação de senha não batem',
      });
    };

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({
        error: true,
        message: 'Este usuário já existe',
      });
    };

    const data = { name, email, password };
    data.password = await bcrypt.hash(data.password, 8);

    await User.create(data, (err) => {
      if (err) return res.status(400).json({
        error: true,
        message: 'Error insert user to mongoDB'
      });
      return res.status(200).json({
        error: false,
        message: 'User insert successfully'
      });
    });
  };
};

module.exports = new UserController();