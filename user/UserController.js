//taken from drake's lesson on user auth

const bcrypt = require('bcrypt');
const User   = require('./model/User');
const bodyParser = require('body-parser')


module.exports = {
  index(req, res, next) {
    return res.json({
      data:    { user: req.user },
      message: 'Put a user profile page on this route',
    });
  },

  create(req, res, next) {
    bcrypt.hash(req.body.password, 11)
      .then(pwdHash => User.save({
        username:        req.body.username,
        email:           req.body.email,
        firstname:       req.body.firstname,
        lastname:        req.body.lastname,
        password_digest: pwdHash
      }))
      .then(() => next())
      .catch(err => next(err));
  },
};
