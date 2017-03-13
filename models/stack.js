
/////////////////////// STACK MODEL //////////////////////////////////////////////////////////////////

   ////////////////////////////////
  ///   IMPORT MONGOOSE ODM    ///
 ////////////////////////////////

var mongoose = require('mongoose');

module.exports = mongoose.model('Stack', {
        name : String,
        author : String,
        date : String,
        description : String
    });