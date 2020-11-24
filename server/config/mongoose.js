const config = require( "./index" );
const mongoose = require( "mongoose" );

module.exports = function( app ) {
   const uri = config.mongoUrl;
    mongoose.connect(uri, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        })
        .then(() => {
          console.log("MongoDB Connected");
        })
        .catch(err => console.log(err))
   
   
};
