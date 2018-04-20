const textbooksRouter = require('express').Router();
const textbooksController = require('../controllers/textbooks/textbooksController');
const textbooksViewController = require('../controllers/textbooks/textbooksViewController');
const textDb = require('../models/textbooks');

function sendError(err, req, res, next) {
  console.log('I send errors');
  res.status(500).json({
    status: 'error',
    message: err.message
  })
}

textbooksRouter.route('/')
  .get(textbooksController.getAll, textbooksViewController.sendTexts, sendError)
  .post(textbooksController.create, textbooksViewController.sendCreateText)

textbooksRouter.route('/new')
  .get(textbooksController.getGenres, textbooksViewController.sendGenres)

textbooksRouter.route('/cart')
  .get(textbooksController.getGenres, textbooksController.getCartTexts, textbooksViewController.sendCartTexts, textbooksViewController.sendGenres, textbooksViewController.sendOneTextCart)
  .put(textbooksController.update)
  .delete(textbooksController.destroy, textbooksViewController.deleteText)
textbooksRouter.route('/myTextbooks')
.get(textbooksController.getGenres, textbooksViewController.sendGenres, textbooksViewController.sendOneTextCart)
.delete(textbooksController.destroy, textbooksViewController.deleteText)


textbooksRouter.route('/myTextbooks/:id')
.get(textbooksController.getOne, textbooksViewController.sendEditDelete)
.put(textbooksController.update)


textbooksRouter.route('/myTextbooks/:id/edit')
.get(textbooksController.getOne, textbooksController.getGenres, textbooksViewController.editText)
.put(textbooksController.update)
textbooksRouter.route('/cart/:id')
  .get(textbooksController.getOne, textbooksController.getGenres, textbooksViewController.sendEditDelete)
  .put(textbooksController.update)
  .delete(textbooksController.destroy, textbooksViewController.deleteText)

textbooksRouter.route('/:id')
  .get(textbooksController.getOne, textbooksViewController.sendOneText)
  .put(textbooksController.update)
  // .delete(textbooksController.destroy, textbooksViewController.deleteText)


module.exports = textbooksRouter;
