require('dotenv').config();

const express = require('express'); //imports express
const logger = require('morgan'); //imports morgan
const bodyParser = require('body-parser'); //imports body parser
const path = require('path'); //uses path
const methodOverride = require('method-override');//imports method override
const session      = require('express-session'); //imports express session

const app = express();

const PORT = process.env.PORT || 3001;

//imports files
const authService  = require('./user/auth/AuthService');
const authRouter   = require('./user/auth/AuthRouter');
const genresRouter = require('./routes/genresRoutes');
const textbooksRouter = require('./routes/textbooksRoutes');

//sets views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public'))); //sets public files to be used
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

app.get('/myHome', authService.loginRequired, (req, res) => {
  res.render('home/loggedin'); //renders home/loggedin ejs for myHome page
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(400).send('Something broke!');
});


app.get('/', (req, res) => {
  res.render('home/index'); //renders index ejs for home page
})

app.use('/genres', genresRouter); //renders /genres page
app.use('/textbooks', textbooksRouter); //renders /textbooks page

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})
