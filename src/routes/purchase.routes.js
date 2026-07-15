const express = require("express");

const router = express.Router();

const purchaseOrderController = require("../controller/purchaseOrder.controller");

// Create Purchase Order
router.post("/", purchaseOrderController.createPurchaseOrder);

// Get All Purchase Orders
router.get("/", purchaseOrderController.getAllPurchaseOrders);

// Get Purchase Order By ID
router.get("/:id", purchaseOrderController.getPurchaseOrderById);

// Update Purchase Order
router.put("/:id", purchaseOrderController.updatePurchaseOrder);

// Delete Purchase Order
router.delete("/:id", purchaseOrderController.deletePurchaseOrder);

module.exports = router;