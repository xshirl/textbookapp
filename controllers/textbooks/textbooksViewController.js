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

function sendCreateTextbook (req, res) {
  textbook = res.locals.newTextbook;
  res.redirect(`textbooks/${textbook.id}`);
}


module.exports = {
  sendTexts
}
