var express = require('express');
var router = express.Router();

//import controller
const userController = require('../controllers/userController')

/* GET users listing. */
router.post('/register', userController.userRegister);
router.post('/login', userController.userLogin);
router.get('/:userId', userController.userById);
router.get('/', userController.getUsers);

module.exports = router;
