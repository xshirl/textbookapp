const authRouter     = require('express').Router();
const AuthService    = require('./AuthService');
const ViewController = require('../UserViewController');
const userController = require('../UserController');

/* public routes */

authRouter.route('/login')
  .get(ViewController.showLoginForm)
  .post(AuthService.login, ViewController.handleCreateUser)

authRouter.route('/register')
  .get(ViewController.showRegisterForm)
  .post(userController.create, AuthService.login, ViewController.registerUser)

authRouter.get('/logout', AuthService.logout, ViewController.handleLogout)


authRouter.use((err, req, res, next) => {
  console.error(err);
  res.json({ error: err });
});
module.exports = authRouter;
