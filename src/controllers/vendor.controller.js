const vendorRepository = require('../repositories/vendor.repository');

const createVendor = async (req, res) => {
    try {
        const vendor = await vendorRepository.createvendor(req.body);
        res.status(201).json(vendor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getVendorByName = async (req, res) => {
    try {
        const vendor = await vendorRepository.findByName(req.params.name);
        if (!vendor) {
            return res.status(404).json({ error: 'Vendor not found' });
        }
        res.json(vendor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllVendors = async (req, res) => {
    try {
        const vendors = await vendorRepository.findAll();
        res.json(vendors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getVendorById = async (req, res) => {
    try {
        const vendor = await vendorRepository.findById(req.params.id);
        if (!vendor) {
            return res.status(404).json({ error: 'Vendor not found' });
        }
        res.json(vendor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateVendor = async (req, res) => {
    try {
        const vendor = await vendorRepository.update(req.params.id, req.body);
        if (!vendor) {
            return res.status(404).json({ error: 'Vendor not found' });
        }
        res.json(vendor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteVendor = async (req, res) => {
    try {
        const vendor = await vendorRepository.remove(req.params.id);
        if (!vendor) {
            return res.status(404).json({ error: 'Vendor not found' });
        }
        res.json({ message: 'Vendor deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createVendor,
    getVendorByName,
    getAllVendors,
    getVendorById,
    updateVendor,
    deleteVendor
};