const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const controllers = require('./controllers');
const helpers = require('./views/helpers');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs',
    exphbs({
      extname: 'hbs',
     layoutsDir: path.join(__dirname, 'views', 'layouts'),
     partialsDir: path.join(__dirname, 'views', 'partials'),
     defaultLayout: 'main',
     helpers,
    })
);

// app.use(bodyParser.urlencoded({extended: false}));

app.set('port', process.env.PORT || 3000);
app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(controllers);

module.exports = app;
