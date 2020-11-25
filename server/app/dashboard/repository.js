const mongoose = require( "mongoose" );
const Dashboard= require("./model")
const DashboardCollection = mongoose.model( "Dashboard" );



const createDocument = async () => {
    const returnObj = { };
    const dataArray=[]
   for(let count =1;count<=50;count++){
   returnObj[count] = new DashboardCollection();
  }
    for (var key in returnObj) {
      dataArray.push(returnObj[key]);
       
    }
     await Dashboard.insertMany(dataArray);
     const query=   await Dashboard.find({});
  return query;
 
};

const getCollection= async()=>{
  const query=   await Dashboard.find({});
  return query;
}


 const deleteCollection=async()=>{
  const query=  await Dashboard.remove({});
  return query;
 }

 const updateCollection=async(id)=>{
  var date = new Date();
  
   await Dashboard.updateMany({"_id" : id},{
        activeIndicator:false,
        expiryDate: date
     })
  const doc= await  Dashboard.find({})
     return doc

 }
 const expiredCollection=async()=>{
  var date = new Date();
  await Dashboard.updateMany({activeIndicator:true}, {$set: {expiryDate:date}});
 const query=   await Dashboard.find({});
  return  query;
 }


 


module.exports = {
    createDocument,
    deleteCollection,
    updateCollection,
    expiredCollection,
    getCollection,
   
};