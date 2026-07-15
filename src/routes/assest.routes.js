const  express = require('express');
const router = express.Router();
const { createAssest, getAllAssests, getAssestById, updateAssest, deleteAssest } = require('../controllers/assest.controller');

router.post('/', createAssest);
router.get('/', getAllAssests);
router.get('/:id', getAssestById);
router.put('/:id', updateAssest);
router.delete('/:id', deleteAssest);

module.exports = router;