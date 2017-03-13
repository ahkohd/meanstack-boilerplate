/////// DEPENDENCIES //////////////////////////////

var express = require('express');
var http = require('http');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var fs = require('fs');
var port = process.env.PORT || 3000;



////// APP META_INF ////////////////////////////////

/*
 * Read and parse package.jon into app.meta
 */

app.meta = JSON.parse(fs.readFileSync('package.json').toString());




////// PREFENCES //////////////////////////////

////// SET DIR PREFENCES

// VIEWS DIR
app.set('views', path.join(__dirname, 'views'));
// PUBLIC DIR
app.use(express.static(__dirname + '/public'));
// SET APP FAVICON

/*
 * Uncomment after placing your favicon in /public
 */

//app.use(favicon(__dirname + '/public/favicon.ico'));



// REQUIRE MONGOSE PREFENCES
require('./config/db.js')(mongoose);

// REQUIRE APP PREFENCES
require('./config/prefences.js')(app);

// REQUIRE MIDDLEWARES
require('./config/middlewares.js')(app);





//// CONTROLLERS /////////////////////////////////////

/*
 * Automatically load all routes(controllers) in the /controller dir
 */

fs.readdirSync('./controllers').forEach(function(file) {
  if (file.substr(-3) == '.js') {
    route = require('./controllers/' + file).controller(app);

  }
});




///// ERROR HANDLING ////////////////////////////


// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


///// DEVELOPMENT ERROR HANDLER:
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('404', {
      message: err.message,
      error: err
    });
  });
}

//PRODUCTION ERROR HANDLER:
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('404', {
    message: err.message,
    error: {}
  });
});





//// START APP
app.listen(port);
console.log(app.meta.name + " v" + app.meta.version + " Running on [PORT]: " + port);