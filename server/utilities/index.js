exports.extractObject = ( obj, keys ) => {
    const returnObj = { };
    keys.forEach( key => { 
        returnObj[ key ] = obj[ key ];
     } );
    return returnObj;
};
exports.extractArray=(array)=>{
 return array
}