const express = require("express");
const router = express.Router();

const userController = require("../controller/user.controller");
const authorizeMiddleware = require("../middleware/auth.middleware");

router.post("/", authorizeMiddleware("admin"),userController.createUser);

router.get("/", authorizeMiddleware("admin","Manager"),userController.getAllUsers);

router.get("/:id", authorizeMiddleware("admin","Manager"),userController.getUserById);

router.put("/:id", authorizeMiddleware("admin"),userController.updateUser);

router.delete("/:id", authorizeMiddleware("admin"),userController.deleteUser);

module.exports = router;