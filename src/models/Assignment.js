const mongoose = requie("mongoose");
const assignmentSchema = new mongoose.Schema({


asset:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Asset",
    required:true
},
employee:{  
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
},
assignby:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
},
assignedDate:{
    type:Date,
    required:true
},
expectedReturnDate:{
    type:Date,  
    },
returnDate:{
    type:Date
},
condition:{
    enum:["GOOD","DAMAGED","REPAIR"],
},
status:{
    type:String,
    enum:["ASSIGNED","RETURNED"],   
    default:"ASSIGNED"
},
remarks:{
    type:String
}
});
module.exports = mongoose.model("Assignment",assignmentSchema);