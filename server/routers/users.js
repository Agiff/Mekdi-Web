const router = require('express').Router();
const itemController = require('../controllers/itemController');
const userController = require('../controllers/userController');

router.post('/login', userController.login);
router.post('/register', userController.register);

router.get('/items', itemController.getUserItems);
router.get('/items/:id', itemController.getUserItemDetail);

module.exports = router;