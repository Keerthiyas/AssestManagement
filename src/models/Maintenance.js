const mongose = require("mongoose");
const maintenanceSchema = new mongoose.Schema({

    asset:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Asset",
        required:true
    },
    issue:{
        type:String,
        required:true,
        trim:true
    },
    repaircenter:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Vendor",
        required:true
    },
    repaircost:{
        type:Number,
        required:true   
    },
    status:{
        type:String,
        enum:["INPROGRESS","COMPLETED","CANCELLED"],
        default:"INPROGRESS"
    },
    remarks:{
        type:String,
        trim:true
    }  ,
    startDate:{
        type:Date,
        required:true,
        default:Date.now
    },
    endDate:{
        type:Date
        
    }

    
},
{
    timestamps:true
});
module.exports = mongoose.model("Maintenance",maintenanceSchema);
    