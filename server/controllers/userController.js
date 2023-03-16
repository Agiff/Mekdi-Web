const { comparePassword } = require('../helpers/bcrypt');
const { createToken } = require('../helpers/jwt');
const { User } = require('../models');

class userController {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) throw { name: 'EmailPasswordRequired' };
      
      const userFound = await User.findOne({ where: { email } });
      if (!userFound) throw { name: 'EmailPasswordInvalid' };

      const validatedPassword = comparePassword(password, userFound.password);
      if (!validatedPassword) throw { name: 'EmailPasswordInvalid' };

      const access_token = createToken({ id: userFound.id });
      res.status(200).json({ access_token });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = userController;