const express = require("express");
const router = express.Router();

const maintenanceController = require("../controller/maintenance.controller");

router.post("/", maintenanceController.createMaintenance);

router.get("/", maintenanceController.getAllMaintenances);

router.get("/:id", maintenanceController.getMaintenanceById);

router.put("/:id", maintenanceController.updateMaintenance);

router.delete("/:id", maintenanceController.deleteMaintenance);

module.exports = router;