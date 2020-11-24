const express = require( "express" );
const bodyParser = require( "body-parser" );
const cors = require('cors');
const config = require( "./config" );
const customResponses = require( "./middlewares/customResponses" );

const app = express( );
const port = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV || config.env;

app.set( "env", ENV );
app.use(cors());
app.use( bodyParser.json( ) );
app.use( customResponses );

require( "./config/mongoose" )( app );
require( "./app" )( app );

app.use( ( req, res ) => {
res.notFound( );
} );


app.use(function(req, res, next){
    console.log(`${req.method} requrest for ${req.url}`);
    next();
});
app.use( ( err, req, res, next ) => {
  console.log(err)
    next( err );
} );

// Don't remove next !!!!
app.use( ( err, req, res, next ) => { // eslint-disable-line no-unused-vars
  
    res.status( 503 ).json( {
        success: false,
        error: "server_error",
    } );
} );
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function(){
       console.log(`Server is running on port ${app.get('port')}`);
  });