function sendGenres(req, res) {
  res.render('genres/index', {
    genres: res.locals.genres
  })
}

function sendTextGenre(req, res) {
  res.render('genres/show', {
    genre: res.locals.genre,
    textbooks: res.locals.textbooks,
    book: res.locals.book
  })
}

// function sendText(req, res) {
//   res.render('genres/show', {
//     book: res.locals.book
//   })
// }
module.exports = {
  sendGenres,
  sendTextGenre
}
