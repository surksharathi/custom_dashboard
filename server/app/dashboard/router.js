require( "./model" );
const controller = require( "./controller" );

const express = require( "express" );

const router = express.Router( );



/**
*    @apiGroup Dashboard
*    @api {post} / Creating new Document.
*    @apiExample {response} Example response:
*       {
*      "success": true,
*        "payload": {
*       "message": "Successfully created documents in database"
*        }
}
*/
 router.post( "/", controller.create );

 /**
*    @apiGroup Dashboard
*    @api {get} / fetch all the document in Database.
*    @apiExample {response} Example response:
*/

 router.get("/",controller.getCollection);
 
/**
*    @apiGroup Dashboard
*    @api {delete} / Deleting All the document in Database collection.
*/
router.delete("/",controller.delete);
router.put("/",controller.updateDocument);
router.put("/expiredDocument",controller.expiredDocument);

module.exports = router;