const express = require("express");
const router = express.Router();

const maintenanceController = require("../controllers/maintenance.controller");
const authMiddleware = require("../middleware/auth.middleware");
const authorizeMiddleware = require("../middleware/authorize.middleware");
const{createMaintenanceValidation}  = require("../validation/maintenance.validation");
const validate = require("../middleware/auth.middleware");
router.use(authMiddleware);

router.post("/", createMaintenanceValidation,validate,authorizeMiddleware("admin","manager"),maintenanceController.createMaintenance);

router.get("/", maintenanceController.getAllMaintenances);

router.get("/:id", maintenanceController.getMaintenanceById);

router.put("/:id",authorizeMiddleware("admin","manager"), maintenanceController.updateMaintenance);

router.delete("/:id", authorizeMiddleware("admin"),maintenanceController.deleteMaintenance);

module.exports = router;