const bcrypt = require('bcrypt');
const User   = require('../model/User');

module.exports = {

  async login(req, res, next) {
    try {
      const { username, password } = req.body;

      const user = await User.findOne(username);
      const isValidPass = await bcrypt.compare(password, user.password_digest);

      if (!isValidPass) {
        throw { message: 'Incorrect Password' };
      }

      req.session.user = user;
      next();
    } catch (err) {
      next(err);
    }

  },


  logout(req, res, next) {

    req.session.destroy(err => next(err));

  },

  loginRequired: [
    (req, res, next) => next(!req.session.user || null),
    (err, req, res, next) => res.sendStatus(401),
  ],
};
