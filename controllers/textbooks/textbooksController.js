const textDb = require('../../models/textbooks');
// const genresDb = require('../../models/genres')

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
      res.redirect(`/textbooks/myTextbooks/${req.body.id}`);
    })
}

function destroy(req, res) {
  textDb.deleteText(req.params.id)
    .then(() => {
      res.redirect(`/textbooks/myTextbooks`);
    })
}

module.exports = {
  getAll,
  getOne,
  create,
  edit,
  update

}