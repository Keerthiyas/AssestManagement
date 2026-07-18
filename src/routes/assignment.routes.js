const express = require("express");

const router = express.Router();

const assignmentController = require("../controllers/assignment.controller");
const authMiddleware = require("../middleware/auth.middleware");
const authorizeMiddleware = require("../middleware/authorize.middleware");
router.use(authMiddleware);

router.post("/", authorizeMiddleware("admin","manager"),assignmentController.createAssignment);

router.get("/", authorizeMiddleware("admin","manager"),assignmentController.getAllAssignments);

router.get("/:id", authorizeMiddleware("admin","manager"),assignmentController.getAssignmentById);

router.put("/:id", authorizeMiddleware("admin","manager"),assignmentController.updateAssignment);

router.delete("/:id", authorizeMiddleware("admin"),assignmentController.deleteAssignment);

module.exports = router;