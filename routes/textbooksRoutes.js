const textbooksRouter = require('express').Router(); //creates router
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
  .get(textbooksController.getAll, textbooksViewController.sendTexts, sendError) //gets all textbooks
  .post(textbooksController.create, textbooksViewController.sendCreateText) //creates new text
  .delete(textbooksController.destroy, textbooksViewController.deleteText) //deletes text
textbooksRouter.route('/new')
  .get(textbooksController.getGenres, textbooksViewController.sendGenres)

textbooksRouter.route('/cart')
  .get(textbooksController.getGenres, textbooksController.getCartTexts, textbooksViewController.sendCartTexts, textbooksViewController.sendGenres, textbooksViewController.sendOneTextCart) //gets textbooks and puts them in cart
  .put(textbooksController.update) //updates textbook data

textbooksRouter.route('/cart/:id/edit')
.get(textbooksController.getOne, textbooksController.getGenres, textbooksViewController.editText)
.put(textbooksController.update)

textbooksRouter.route('/cart/:id')
  .get(textbooksController.getOne, textbooksController.getGenres, textbooksViewController.sendEditDelete)
  .put(textbooksController.update)
  // .delete(textbooksController.destroy, textbooksViewController.deleteText)

textbooksRouter.route('/:id') //gets one textbook
  .get(textbooksController.getOne, textbooksViewController.sendOneText)
  .put(textbooksController.update)
  .delete(textbooksController.destroy, textbooksViewController.deleteText)


module.exports = textbooksRouter;
