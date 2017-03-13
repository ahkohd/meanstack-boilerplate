
module.exports.controller = function(app) {


  // HOME PAGE
  app.get('/', function(req, res) {
      res.render('index', {meta: app.meta});
  });

}
