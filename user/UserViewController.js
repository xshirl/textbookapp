function showLoginForm(req, res) {
  res.render('auth/login');
}

function showRegisterForm(req, res) {
  res.render('auth/register');
}

function handleCreateUser(req, res) {
  res.redirect('/myHome');
}

function registerUser(req, res) {
  res.redirect('/auth/login');
}
function handleLogout(req, res) {
  res.redirect('/');
}

function handleDelete(req, res) {
  res.redirect('/');
}

module.exports = {
  showLoginForm,
  showRegisterForm,
  handleCreateUser,
  handleLogout,
  handleDelete,
  registerUser
}
