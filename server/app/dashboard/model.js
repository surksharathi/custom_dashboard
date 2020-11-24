const mongoose = require( "mongoose" );
const {Schema } = require( 'mongoose');


const dashboardSchema = new Schema( {
   
   activeIndicator:{
       type:Boolean, 
       default: true
    },
   effectiveDate:{
       type:Date, 
       default:Date.now
    },
   expiryDate:{
       type:Date, 
       default:null
    },
    name:{
        type:String,
        default:"Microsoft Powerpoint"
    },
    tenant:{
        type:String,
        default:"Microsoft"
    },
    description:{
        type:String,
        default:"PowerPoint enables users to add animation"
    },
    field4:{
        type:String,
        default:""
    },
    field5:{
        type:String,
        default:""
    },
    field6:{
        type:String,
        default:""
    },
    field7:{
        type:String,
        default:""
    }
}, {
    timestamps: true,
} );

module.exports = mongoose.model( "Dashboard", dashboardSchema );