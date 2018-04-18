function sendGenres(req, res) {
  res.render('genres/index', {
    genres: res.locals.genres
  })
}

function sendTextGenre(req, res) {
  res.render('genres/show', {
    genre: res.locals.genre,
    textbooks: res.locals.textbooks
  })
}

module.exports = {
  sendGenres,
  sendTextGenre
}
