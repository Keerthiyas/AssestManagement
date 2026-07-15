const purchaseOrderService = require("../services/purchase.service");


const createPurchaseOrder = async (req, res) => {
    try {
        const purchaseOrder = await purchaseOrderService.createPurchaseOrder(req.body);

        res.status(201).json(purchaseOrder);
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};

const getAllPurchaseOrders = async (req, res) => {
    try {
        const purchaseOrders = await purchaseOrderService.getAllPurchaseOrders();

        res.status(200).json(purchaseOrders);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

const getPurchaseOrderById = async (req, res) => {
    try {
        const purchaseOrder = await purchaseOrderService.getPurchaseOrderById(
            req.params.id
        );

        res.status(200).json(purchaseOrder);
    } catch (error) {
        res.status(404).json({
            error: error.message,
        });
    }
};

const updatePurchaseOrder = async (req, res) => {
    try {
        const purchaseOrder = await purchaseOrderService.updatePurchaseOrder(
            req.params.id,
            req.body
        );

        res.status(200).json(purchaseOrder);
    } catch (error) {
        res.status(404).json({
            error: error.message,
        });
    }
};

const deletePurchaseOrder = async (req, res) => {
    try {
        const purchaseOrder = await purchaseOrderService.deletePurchaseOrder(
            req.params.id
        );

        res.status(200).json({
            message: "Purchase Order deleted successfully",
            purchaseOrder,
        });
    } catch (error) {
        res.status(404).json({
            error: error.message,
        });
    }
};

module.exports = {
    createPurchaseOrder,
    getAllPurchaseOrders,
    getPurchaseOrderById,
    updatePurchaseOrder,
    deletePurchaseOrder,
};