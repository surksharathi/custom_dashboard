const articlesRouter = require( "./dashboard/router" );


module.exports = ( app ) => {
   
    app.use( "/articles", articlesRouter );
};