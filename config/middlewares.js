var favicon = require('serve-favicon');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

module.exports = function(app) {

  //// APP MIDDLEWARES

  /*
   * Application middlewares should be included here.
   */


  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json({
    type: 'application/vnd.api+json'
  }));
  app.use(methodOverride());
  app.use(cookieParser());
  app.use(require('express-session')({
    secret: 'mean',
    resave: false,
    saveUninitialized: false
  }));




}