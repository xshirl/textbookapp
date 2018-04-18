const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');

const app = express();

const PORT = process.env.PORT || 3001;

const genresRouter = require('./routes/genresRoutes');
const textbooksRouter = require('./routes/textbooksRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.render('home/index');
})

app.use('/genres', genresRouter);
app.use('/textbooks', textbooksRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})
