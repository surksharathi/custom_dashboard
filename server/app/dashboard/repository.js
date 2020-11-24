const mongoose = require( "mongoose" );
const Dashboard= require("./model")
const DashboardCollection = mongoose.model( "Dashboard" );
const moment = require('moment');


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
  var date = new Date.now();
  
   await Dashboard.updateMany({"_id" : id},{
        activeIndicator:false,
        expiryDate: date
     })
  const doc= await  Dashboard.find({"_id":id})
     return doc

 }
 const expiredDocument=async()=>{
  var date = new Date.now();
  const dateNow=   moment(date).format('MM-DD-YYYY');
 const response= await Dashboard.updateMany({activeIndicator:true}, {$set: {expiryDate:dateNow}});
  return response
 }




module.exports = {
    createDocument,
    deleteCollection,
    updateCollection,
    expiredDocument,
    getCollection
};