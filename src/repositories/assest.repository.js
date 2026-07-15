const assest = require('../models/Assest');

const createAssest = async (data) => {
    return await assest.create(data);
};

const findByName = async (name) => {
    return await assest.findOne({ assetname: name });
};

const findAll = async () => {
    return await assest.find();
};
const findBySerialNumber = async (serialNumber) => {
    return await assest.findOne({ serialnumber: serialNumber });
};
const findById = async (id) => {
    return await assest.findById(id);
};

 const update = async (id, data) => {
    return await assest.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
    });
};

const remove = async (id) => {
    return await assest.findByIdAndDelete(id);
};

module.exports = {
    createAssest,
    findByName,
    findAll,
    findById,
    update,
    remove,
    findBySerialNumber,
};