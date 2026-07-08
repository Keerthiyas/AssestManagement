const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
    name:{
        type : String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true
    },
    phone:{
        type:String,
        required:true,
        trim:true,
    },
    address:{
        type:String,
        required:true,
        trim:true,
    },
    gstnumber:{
        type:String,
        required:true,
        trim:true,
    },
    status:{
        type:String,
        enum:["ACTIVE","INACTIVE"], 
        default:"ACTIVE"
}
},
{
    timestamps:true
}
);
module.exports = mongoose.model("Vendor",vendorSchema);