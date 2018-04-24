//taken from drake's/jason's lesson on user auth https://git.generalassemb.ly/wdi-nyc-rover/js-node-sessions-lesson

const bcrypt = require('bcrypt'); //imports bcrypt
const User   = require('../model/User');

module.exports = {

  async login(req, res, next) {
    try {
      const { username, password } = req.body; //sets username and password equal to req body data

      const user = await User.findOne(username);
      const isValidPass = await bcrypt.compare(password, user.password_digest); //compares password with registered password

      if (!isValidPass) { //if invalid password, throw error
        throw { message: 'Incorrect Password' };
      }

      req.session.user = user;
      next();
    } catch (err) {
      next(err);
    }

  },


  logout(req, res, next) {

    req.session.destroy(err => next(err)); //ends session

  },

  loginRequired: [
    (req, res, next) => next(!req.session.user || null),
    (err, req, res, next) => res.sendStatus(401),
  ],
};
