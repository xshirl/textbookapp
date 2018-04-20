function sendTexts(req, res) {
  res.render('textbooks/index', {
    textbooks: res.locals.textbooks
  })
}

function sendOneText(req, res) {
  res.render(`textbooks/show`, {
    textbook: res.locals.textbook
  })
}

function sendOneTextCart(req, res) {
  res.render(`textbooks/cart`, {
    genres: res.locals.genres,
    textbook: res.locals.textbook
  })
}

function sendEditDelete(req, res) {
  res.render(`textbooks/showeditdelete`, {
    genres: res.locals.genres,
    textbook: res.locals.textbook
  })
}

function sendCreateText (req, res) {
  textbook = res.locals.newTextbook;
  res.redirect(`textbooks/${textbook.id}`);
}

function sendGenres(req, res) {
  res.render('textbooks/new', {
    genre: res.locals.genres
  })
}

function editText(req, res) {
  textbook = res.locals.textbook;
  res.render('textbooks/edit', {
    textbook: res.locals.textbook
  })
}

function deleteText(req, res) {
  res.redirect('/textbooks/cart')
}

function sendCartTexts(req, res) {
  res.render('textbooks/cart', {
    textbooks: res.locals.cartTexts
  })
}

function sendMyTexts(req, res) {
  res.render('textbooks/mybooks', {
    textbooks: res.locals.myTexts
  })
}
module.exports = {
  sendTexts,
  sendOneText,
  sendCreateText,
  sendGenres,
  editText,
  deleteText,
  sendOneTextCart,
  sendEditDelete,
  sendCartTexts,
  sendMyTexts
}
