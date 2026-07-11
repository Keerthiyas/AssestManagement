const vendorRepository = require('../repositories/vendor.repository');
 const createVendor = async(data) =>{
        const existingVendor = await vendorRepository.findByName(data.name);
        if (existingVendor) {
            throw new Error('Vendor with this name already exists');
        }
        return await vendorRepository.createvendor(data);
 };
 const getAllVendors = async() =>{
        return await vendorRepository.findAll();
 };
 const getVendorById = async(id) =>{
        const vendor = await vendorRepository.findById(id);
        if (!vendor) {
            throw new Error('Vendor not found');
        }
        return vendor;
 };
 const updateVendor = async(id,data) =>{
        const vendor = await vendorRepository.update(id,data);
        if (!vendor) {
            throw new Error('Vendor not found');
        }


        return vendor;
 };
 const deleteVendor = async(id) =>{
        const vendor = await vendorRepository.remove(id);
        if (!vendor) {
            throw new Error('Vendor not found');
        }
        return vendor;
};
module.exports = {
    createVendor,
    getAllVendors,
    getVendorById,
    updateVendor,
    deleteVendor    
}
