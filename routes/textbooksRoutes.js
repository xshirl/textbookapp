const textbooksRouter = require('express').Router();
const textbooksController = require('../controllers/textbooks/textbooksController');
const textbooksViewController = require('../controllers/textbooks/textbooksViewController');
const textDb = require('../models/textbooks');

textbooksRouter.route('/')
  .get(textbooksController.getAll, textbooksViewController.sendTexts);

module.exports = textbooksRouter;
