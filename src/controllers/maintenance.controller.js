const maintenanceService = require("../services/maintenance.service");

const createMaintenance = async (req, res) => {
    try {
        const maintenance = await maintenanceService.createMaintenance(req.body);

        res.status(201).json(maintenance);
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};

const getAllMaintenances = async (req, res) => {
    try {
        const maintenances = await maintenanceService.getAllMaintenances();

        res.status(200).json(maintenances);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

const getMaintenanceById = async (req, res) => {
    try {
        const maintenance = await maintenanceService.getMaintenanceById(
            req.params.id
        );

        res.status(200).json(maintenance);
    } catch (error) {
        res.status(404).json({
            error: error.message,
        });
    }
};

const updateMaintenance = async (req, res) => {
    try {
        const maintenance = await maintenanceService.updateMaintenance(
            req.params.id,
            req.body
        );

        res.status(200).json(maintenance);
    } catch (error) {
        res.status(404).json({
            error: error.message,
        });
    }
};

const deleteMaintenance = async (req, res) => {
    try {
        const maintenance = await maintenanceService.deleteMaintenance(
            req.params.id
        );

        res.status(200).json({
            message: "Maintenance deleted successfully",
            maintenance,
        });
    } catch (error) {
        res.status(404).json({
            error: error.message,
        });
    }
};

module.exports = {
    createMaintenance,
    getAllMaintenances,
    getMaintenanceById,
    updateMaintenance,
    deleteMaintenance,
};