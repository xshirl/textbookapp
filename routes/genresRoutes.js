const genresRouter = require('express').Router(); //creates router

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
.get(genresController.getAll, genresViewController.sendGenres) //gets all genres on /genres page

genresRouter.route('/:id') //gets all textbook with same genre id
.get(genresController.getOne, genresController.getTextGenre, genresViewController.sendTextGenre)

module.exports = genresRouter;
