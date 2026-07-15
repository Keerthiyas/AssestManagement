const Maintenance = require("../models/Maintenance");

const createMaintenance = async (data) => {
    return await Maintenance.create(data);
};

const findAll = async () => {
    return await Maintenance.find()
        .populate("asset")
        .populate("repaircenter")
        .sort({ createdAt: -1 });
};

const findById = async (id) => {
    return await Maintenance.findById(id)
        .populate("asset")
        .populate("repaircenter");
};

const update = async (id, data) => {
    return await Maintenance.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
    });
};

const remove = async (id) => {
    return await Maintenance.findByIdAndDelete(id);
};

const findActiveMaintenance = async (assetId) => {
    return await Maintenance.findOne({
        asset: assetId,
        status: "INPROGRESS",
    });
};

module.exports = {
    createMaintenance,
    findAll,
    findById,
    update,
    remove,
    findActiveMaintenance,
};