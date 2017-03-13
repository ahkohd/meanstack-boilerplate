/*
 * APP API ROUTES CONTROLLER
 */


////////////////////////////////
//   IMPORT THE STACK MODEL   //
////////////////////////////////

var Stack = require('../models/stack');

module.exports.controller = function(app) {

  app.get('/api/stacks', function(req, res) {

    // use mongoose to get all stacks in the database
    Stack.find(function(err, stacks) {

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err) {
        res.send(err)


      } else {
        // return all stacks in JSON format
        res.json(stacks);
      }

    });

  });




  // create a stacks and send back all stack after creation
  app.post('/api/stacks', function(req, res) {

    // create a stack, information comes from AJAX request from Angular
    Stack.create({

      name: req.body.name,
      author: req.body.author,
      date: Date.now(),
      description: req.body.description
    }, function(err, stacks) {
      if (err) res.send(err);

      // get and return all the stacks after you create another
      Stack.find(function(err, stacks) {
        if (err) res.send(err)
        res.json(stacks);
      });
    });

  });

  // delete a stack
  app.delete('/api/stacks/:stack_id', function(req, res) {
    Stack.remove({
      _id: req.params.stack_id
    }, function(err, stack) {
      if (err) res.send(err);

      // get and return all the stack after you create another
      Stack.find(function(err, stacks) {
        if (err) res.send(err);
        res.json(stacks);
      });
    });
  });

}