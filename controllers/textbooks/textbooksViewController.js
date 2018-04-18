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
  res.render('students/edit', {
    textbook: res.locals.textbook
  })
}

function deleteText(req, res) {
  res.redirect('textbooks/myTextbooks')
}
module.exports = {
  sendTexts,
  sendOneText,
  sendCreateText,
  sendGenres,
  editText,
  deleteText
}
