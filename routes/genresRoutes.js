const genresRouter = require('express').Router();

const genresController = require('../controllers/genres/genresController');
const genresViewController = require('../controllers/genres/genresViewController');
const genresDb = require('../models/textbooks');

function sendError(err, req, res, next) {
  console.log('I send errors');
  res.status(500).json({
    status: 'error',
    message: err.message
  })
}

genresRouter.route('/')
.get(genresController.getAll, genresViewController.sendGenres)

genresRouter.route('/:id')
.get(genresController.getOne, genresController.getTextGenre, genresViewController.sendTextGenre)

module.exports = genresRouter;
