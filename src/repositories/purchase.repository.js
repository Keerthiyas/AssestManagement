const PurchaseOrder = require("../models/Purchase");

const createPurchaseOrder = async (data) => {
    return await PurchaseOrder.create(data);
};

const findByInvoiceNumber = async (invoiceNumber) => {
    return await PurchaseOrder.findOne({ invoiceNumber });
};

const findById = async (id) => {
    return await PurchaseOrder.findById(id)
        .populate("vendor")
        .populate("asset")
        .populate("purchasedBy");
};

const findAll = async () => {
    return await PurchaseOrder.find()
        .populate("vendor")
        .populate("asset")
        .populate("purchasedBy")
        .sort({ createdAt: -1 });
};

const update = async (id, data) => {
    return await PurchaseOrder.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
    });
};

const remove = async (id) => {
    return await PurchaseOrder.findByIdAndDelete(id);
};

module.exports = {
    createPurchaseOrder,
    findByInvoiceNumber,
    findById,
    findAll,
    update,
    remove,
};