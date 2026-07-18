const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/category.controller");
const authMiddleware = require("../middleware/auth.middleware");
const authorizeMiddleware = require("../middleware/authorize.middleware");
router.use(authMiddleware);

router.post("/", authorizeMiddleware("admin"),categoryController.createCategory);
router.get("/", categoryController.getAllCategories);
router.get("/:id", authorizeMiddleware("admin"),categoryController.getCategoryById);
router.put("/:id", authorizeMiddleware("admin"),categoryController.updateCategory);
router.delete("/:id", authorizeMiddleware("admin"),categoryController.deleteCategory);

module.exports = router;