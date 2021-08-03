const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.signUp);
router.post('/login', userController.login);
router.get('/', userController.getUsers);
router.get('/get_username/:username', userController.getUsers);

module.exports = router;