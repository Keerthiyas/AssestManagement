const express = require('express');
const router = express.Router();    
const { getAllUsers, createUser, getUserById, updateUser, deleteUser } = require('../controller/userController');

router.post('/', createUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
module.exports = router;