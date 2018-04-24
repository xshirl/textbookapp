const textDb = require('../../models/textbooks'); //imports textbook model
const genresDb = require('../../models/genres') //imports genre model

function getAll (req, res, next) { // gets all the textbooks
  textDb.getAllTexts()
  .then(data => {
    res.locals.textbooks = data; //setting data equal to a res locals
    next(); //next calling next piece of middleware
  })
  .catch(err => { //catching an error
    next(err);
  })
}

function getOne (req, res, next) { //gets one book by id
  textDb.getOneText(req.params.id)
  .then(data => {
    res.locals.textbook = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function create(req, res, next) { //creates new Textbook using post
  textDb.createText(req.body)
  .then(data=> {
    res.locals.newTextbook = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function edit(req, res) { //gets text by id
  textDb.getOneText(req.params.id)
    .then(data => {
      res.locals.textbook = data;
      next();
    })
    .catch(err => {
      err: err.message;
    })
}

function update(req, res, next) { //updates book in cart using put request
  req.body.id = req.params.id;
  textDb.updateText(req.body)
    .then(data => {
      res.redirect(`/textbooks/cart`); //redirects page to cart
    })
}

function destroy(req, res) { //deletes book by id
  textDb.deleteText(req.params.id)
    .then(() => {
      res.redirect(`/textbooks/`); //redirects to textbooks page
    })
}

function getGenres(req, res, next) { //gets all genres
  genresDb.getAllGenres()
  .then(data => {
    res.locals.genres = data;
    next();
  })
  .catch(err=> {
    next(err);
  })
}

function getCartTexts(req, res, next) { //puts textbooks in cart
  textDb.cartTexts()
  .then(data => {
    res.locals.cartTexts = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

// function getMyTexts(req, res, next) {
//   textDb.myTexts()
//   .then(data => {
//     res.locals.myTexts = data;
//     next();
//   })
//   .catch(err => {
//     next(err);
//   })
// }
module.exports = {
  getAll,
  getOne,
  create,
  edit,
  update,
  destroy,
  getGenres,
  getCartTexts

}
