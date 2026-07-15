const maintenanceRepository = require("../repositories/maintenance.repository");
const assetRepository = require("../repositories/assest.repository");
const vendorRepository = require("../repositories/vendor.repository");

const createMaintenance = async (data) => {

    // Check Asset
    const asset = await assetRepository.findById(data.asset);

    if (!asset) {
        throw new Error("Asset not found");
    }

    // Check Vendor
    const vendor = await vendorRepository.findById(data.repaircenter);

    if (!vendor) {
        throw new Error("Repair center not found");
    }

    // Check Existing Maintenance
    const existingMaintenance =
        await maintenanceRepository.findActiveMaintenance(data.asset);

    if (existingMaintenance) {
        throw new Error("Asset is already under maintenance");
    }

    // Check Asset Status
    if (asset.status !== "AVAILABLE") {
        throw new Error("Only available assets can be sent for maintenance");
    }

    // Create Maintenance
    const maintenance =
        await maintenanceRepository.createMaintenance(data);

    // Update Asset Status
    await assetRepository.updateAsset(asset._id, {
        status: "MAINTENANCE",
    });

    return maintenance;
};

const getAllMaintenances = async () => {
    return await maintenanceRepository.findAll();
};

const getMaintenanceById = async (id) => {

    const maintenance = await maintenanceRepository.findById(id);

    if (!maintenance) {
        throw new Error("Maintenance record not found");
    }

    return maintenance;
};

const updateMaintenance = async (id, data) => {

    const maintenance = await maintenanceRepository.update(id, data);

    if (!maintenance) {
        throw new Error("Maintenance record not found");
    }

    // If repair is completed,
    // make asset AVAILABLE again
    if (maintenance.status === "COMPLETED") {

        await assetRepository.updateAsset(
            maintenance.asset._id,
            {
                status: "AVAILABLE",
            }
        );
    }

    return maintenance;
};

const deleteMaintenance = async (id) => {

    const maintenance =
        await maintenanceRepository.findById(id);

    if (!maintenance) {
        throw new Error("Maintenance record not found");
    }

    // If maintenance is deleted,
    // restore asset status
    await assetRepository.updateAsset(
        maintenance.asset._id,
        {
            status: "AVAILABLE",
        }
    );

    return await maintenanceRepository.remove(id);
};

module.exports = {
    createMaintenance,
    getAllMaintenances,
    getMaintenanceById,
    updateMaintenance,
    deleteMaintenance,
};