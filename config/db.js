 //// MOGODB
  /*
   * MEAN APP uses Mongoose ODM.
   * Connect to app mogod database using mogoose.connect();
   */
   
    // Mongodb connection URI
    var DB_URI = "mongodb://localhost/mean";

    module.exports = function(mongoose) {

      mongoose.connect(DB_URI);  

    }
