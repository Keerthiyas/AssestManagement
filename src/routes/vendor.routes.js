const express = require('express');
const router = express.Router();
const vendorController = require('../controllers/vendor.controller');
const authMiddleware = require("../middleware/auth.middleware");
const authorizeMiddleware = require("../middleware/authorize.middleware");
const {createVendorValidation} = require("../validation/vendor.validation");
const validate = require("../middleware/validation.middleware");
router.use(authMiddleware);

router.post('/',createVendorValidation,validate,authorizeMiddleware("admin","Manager"), vendorController.createVendor);
router.get('/', authorizeMiddleware("admin"),vendorController.getAllVendors);
router.get('/:id', authorizeMiddleware("admin"),vendorController.getVendorById);
router.put('/:id', authorizeMiddleware("admin"),vendorController.updateVendor);
router.delete('/:id', authorizeMiddleware("admin"),vendorController.deleteVendor);

module.exports = router;