const  express = require('express');
const router = express.Router();
const { createAssest, getAllAssests, getAssestById, updateAssest, deleteAssest } = require('../controllers/assest.controller');
const authMiddleware = require("../middleware/auth.middleware");
const authorizeMiddleware = require("../middleware/authorize.middleware");
router.use(authMiddleware);

router.post('/',authorizeMiddleware("Admin"), createAssest);
router.get('/', getAllAssests);
router.get('/:id', getAssestById);
router.put('/:id',authorizeMiddleware("Admin","Manager"), updateAssest);
router.delete('/:id', authorizeMiddleware("Admin"),deleteAssest);

module.exports = router;