require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');
const session      = require('express-session');

const app = express();

const PORT = process.env.PORT || 3001;

const authService  = require('./user/auth/AuthService');
const authRouter   = require('./user/auth/AuthRouter');
const genresRouter = require('./routes/genresRoutes');
const textbooksRouter = require('./routes/textbooksRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.set('superSecret', process.env.SERVER_SECRET);
app.use(session({
  secret:            'supersecret',
  resave:            false,
  saveUninitialized: false,
}));
app.use('/auth', authRouter);
/* THIS IS A PRIVATE ROUTE */
app.get('/myHome', authService.loginRequired, (req, res) => {
  // res.json(req.session);
  res.render('home/loggedin');
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(400).send('Something broke!');
});


app.get('/', (req, res) => {
  res.render('home/index');
})

app.use('/genres', genresRouter);
app.use('/textbooks', textbooksRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})
