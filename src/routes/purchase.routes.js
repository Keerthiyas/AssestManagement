const express = require("express");

const router = express.Router();

const purchaseOrderController = require("../controllers/purchase.controller");
const authMiddleware = require("../middleware/auth.middleware");
const authorizeMiddleware = require ("../middleware/authorize.middleware");
router.use(authMiddleware);

// Create Purchase Order
router.post("/", authorizeMiddleware("admin","manager"),purchaseOrderController.createPurchaseOrder);

// Get All Purchase Orders
router.get("/", authorizeMiddleware("admin"),purchaseOrderController.getAllPurchaseOrders);

// Get Purchase Order By ID
router.get("/:id", authorizeMiddleware("admin"),purchaseOrderController.getPurchaseOrderById);

// Update Purchase Order
router.put("/:id", authorizeMiddleware("admin"),purchaseOrderController.updatePurchaseOrder);

// Delete Purchase Order
router.delete("/:id", authorizeMiddleware("admin"),purchaseOrderController.deletePurchaseOrder);

module.exports = router;