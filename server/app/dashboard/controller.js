const utilities = require( "../../utilities" );
const repository = require( "./repository" );

exports.create = async( req, res ) => {
    try {
        const article = await repository.createDocument();
        res.success( utilities.extractArray(
        article,
        
    ) );
    } catch ( err ) {
        res.send( err );
    }
};
exports.getCollection=async(req,res)=>{
    try {
        const article = await repository.getCollection();
        res.success( utilities.extractArray(
        article,
        
    ) );
    } catch ( err ) {
        res.send( err );
    }   
}

exports.delete=async(req,res)=>{
    try{
        const dropData = await repository.deleteCollection();
        res.success( utilities.extractObject(
            dropData,
           ["n","deletedCount"] 
        ) );
        }
    catch(err){
   res.send(err)
    }
}
exports.expiredDocument=async(req,res)=>{
 try{
    
    const expireData = await repository.expiredCollection();
    res.success(expireData)
 }
 catch(err){
     res.send(err)
 }
}
exports.updateDocument=async(req,res)=>{
   
    try{
        const id= req.body.id;
        const updateCollection= await repository.updateCollection(id);
       res.success(updateCollection)
    }
    catch(err){
        res.send(err)   
    }
}
