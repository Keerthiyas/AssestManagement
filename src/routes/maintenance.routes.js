const express = require("express");
const router = express.Router();

const maintenanceController = require("../controllers/maintenance.controller");
const authMiddleware = require("../middleware/auth.middleware");
const authorizeMiddleware = require("../middleware/authorize.middleware");
router.use(authMiddleware);

router.post("/", authorizeMiddleware("admin","manager"),maintenanceController.createMaintenance);

router.get("/", maintenanceController.getAllMaintenances);

router.get("/:id", maintenanceController.getMaintenanceById);

router.put("/:id",authorizeMiddleware("admin","manager"), maintenanceController.updateMaintenance);

router.delete("/:id", authorizeMiddleware("admin"),maintenanceController.deleteMaintenance);

module.exports = router;