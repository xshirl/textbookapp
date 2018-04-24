function sendGenres(req, res) {
  res.render('genres/index', { //renders genres/index view
    genres: res.locals.genres //data is genres
  })
}

function sendTextGenre(req, res) {
  res.render('genres/show', {//renders genres/show view
    genre: res.locals.genre, //sets genre data = genre
    textbooks: res.locals.textbooks //sets data = textbooks
  })
}


module.exports = {
  sendGenres,
  sendTextGenre
}
