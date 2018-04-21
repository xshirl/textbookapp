const textDb = require('../../models/textbooks');
const genresDb = require('../../models/genres')

function getAll (req, res, next) {
  textDb.getAllTexts()
  .then(data => {
    res.locals.textbooks = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function getOne (req, res, next) {
  textDb.getOneText(req.params.id)
  .then(data => {
    res.locals.textbook = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function create(req, res, next) {
  textDb.createText(req.body)
  .then(data=> {
    res.locals.newTextbook = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function edit(req, res) {
  textDb.getOneText(req.params.id)
    .then(data => {
      res.locals.textbook = data;
      next();
    })
    .catch(err => {
      err: err.message;
    })
}

function update(req, res, next) {
  req.body.id = req.params.id;
  textDb.updateText(req.body)
    .then(data => {
      res.redirect(`/textbooks/cart`);
    })
}

function destroy(req, res) {
  textDb.deleteText(req.params.id)
    .then(() => {
      res.redirect(`/textbooks/cart`);
    })
}

function getGenres(req, res, next) {
  genresDb.getAllGenres()
  .then(data => {
    res.locals.genres = data;
    next();
  })
  .catch(err=> {
    next(err);
  })
}

function getCartTexts(req, res, next) {
  textDb.cartTexts()
  .then(data => {
     console.log(data);
    res.locals.cartTexts = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function getMyTexts(req, res, next) {
  textDb.myTexts()
  .then(data => {
    res.locals.myTexts = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}
module.exports = {
  getAll,
  getOne,
  create,
  edit,
  update,
  destroy,
  getGenres,
  getCartTexts,
  getMyTexts

}
