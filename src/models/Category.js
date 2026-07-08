const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
        unique:true,
        trim:true,
        lowercase:true
    },
    description:{
        type : String,
        required : true,
        trim:true
    },
    status:
    {
        type : String,
        enum:["ACTIVE","INACTIVE"],
        default : "ACTIVE"

    }
},
 {
    timestamps : true
 }


);
module.exports = mongoose.model("Category",categorySchema);