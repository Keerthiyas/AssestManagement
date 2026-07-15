const assestRepository = require('../repositories/assest.repository');
const categoryRepository = require("../repositories/category.repository");
const vendorRepository = require("../repositories/vendor.repository");

const createAssest = async (data) =>{
    const existingAssest = await assestRepository.findByName(data.name);
    if (existingAssest) {
        throw new Error('Assest already exists');
    }
    const existingSerial  = await assestRepository.findBySerialNumber(data.serialNumber);
    if (existingSerial) {
        throw new Error('Serial number already exists');
    }
    const existingCategory = await categoryRepository.findById(data.category);
    if (!existingCategory) {
        throw new Error('Category not found');
    }
    const existingVendor = await vendorRepository.findById(data.vendor);
    if (!existingVendor) {
        throw new Error('Vendor not found');
    }
    return await assestRepository.createAssest(data);
};

const getAllAssests = async () =>{
    return await assestRepository.findAll();
};

const getAssestById = async (id) =>{
    const assest = await assestRepository.findById(id);
    if (!assest) {  
        throw new Error('Assest not found');
    }
    return assest;
};

const updateAssest = async (id, data) =>{
    const assest = await assestRepository.update(id, data);
    if (!assest) {
        throw new Error('Assest not found');
    }
    return assest;
};

const deleteAssest = async (id) =>{
    const assest = await assestRepository.remove(id);
    if (!assest) {
        throw new Error('Assest not found');
    }
    return assest;
};

module.exports = {
    createAssest,
    getAllAssests,
    getAssestById,
    updateAssest,
    deleteAssest
};