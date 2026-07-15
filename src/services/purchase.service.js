const purchaseOrderRepository = require("../repositories/purchaseOrder.repository");
const vendorRepository = require("../repositories/vendor.repository");
const assetRepository = require("../repositories/assest.repository");
const userRepository = require("../repositories/user.repository");

const createPurchaseOrder = async (data) => {

    const existingInvoice = await purchaseOrderRepository.findByInvoiceNumber(
        data.invoiceNumber
    );

    if (existingInvoice) {
        throw new Error("Invoice number already exists");
    }

    const vendor = await vendorRepository.findById(data.vendor);

    if (!vendor) {
        throw new Error("Vendor not found");
    }

    const asset = await assetRepository.findById(data.asset);

    if (!asset) {
        throw new Error("Asset not found");
    }

    const user = await userRepository.findById(data.purchasedBy);

    if (!user) {
        throw new Error("User not found");
    }

    return await purchaseOrderRepository.createPurchaseOrder(data);
};

const getAllPurchaseOrders = async () => {
    return await purchaseOrderRepository.findAll();
};

const getPurchaseOrderById = async (id) => {

    const purchaseOrder = await purchaseOrderRepository.findById(id);

    if (!purchaseOrder) {
        throw new Error("Purchase Order not found");
    }

    return purchaseOrder;
};

const updatePurchaseOrder = async (id, data) => {

    const purchaseOrder = await purchaseOrderRepository.update(id, data);

    if (!purchaseOrder) {
        throw new Error("Purchase Order not found");
    }

    return purchaseOrder;
};

const deletePurchaseOrder = async (id) => {

    const purchaseOrder = await purchaseOrderRepository.findById(id);

    if (!purchaseOrder) {
        throw new Error("Purchase Order not found");
    }

    return await purchaseOrderRepository.remove(id);
};

module.exports = {
    createPurchaseOrder,
    getAllPurchaseOrders,
    getPurchaseOrderById,
    updatePurchaseOrder,
    deletePurchaseOrder,
};