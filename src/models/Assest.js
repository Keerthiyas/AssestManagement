const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
    assetcode:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    assetname:{
        type:String,
        required:true
    },
    serialnumber:{
        type:String,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
    },
    vendor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Vendor",
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    purchaseDate:{
        type:Date,
        required:true   
    },
    purchaseCost:{
        type:Number,
        required:true
    },
    warrantyPeriod:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        enum:["AVAILABLE","ASSIGNED","REPAIR","RETIRED"],
        default:"AVAILABLE"
    },
    location:{
        type:String,
        required:true
    }

},

{
    timestamps:true
}
);

module.exports = mongoose.model("Assest", assetSchema);