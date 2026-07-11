const Vendor = require('../models/Vendor');

const createvendor= async(data) =>{
    return await Vendor.create(data);
};

const findByName = async(name) =>{
    return await  Vendor.findOne({name:name});
};

const findAll = async()=>{
    return await Vendor.find().sort({createdAt:-1});
};
const findById = async(id) =>{
    return await Vendor.findById(id);
};

const update = async(id,data) =>{
    return await Vendor.findByIdAndUpdate(id,data,{
        new:true,
        runValidators:true
    });
};

const remove = async(id)=>{
    return await Vendor.findByIdAndDelete(id);
};
module.exports = {
    createvendor,
    findByName,
    findAll,    
    findById,
    update,
    remove,
};
