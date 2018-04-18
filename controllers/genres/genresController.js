const genresDb = require('../../models/genres');

function getAll(req, res, next) {
  genresDb.getAllGenres()
  .then(data => {
    res.locals.genres = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function getOne(req, res, next) {
  genresDb.getOneGenre(req.params.id)
  .then(data => {
    res.locals.genre = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function getTextGenre(req, res, next) {
  genresDb.getTextGenre(req.params.id)
  .then(data => {
    res.locals.textbooks = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

module.exports = {
  getAll,
  getOne,
  getTextGenre
}
