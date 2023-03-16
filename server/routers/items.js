const router = require('express').Router();
const itemController = require('../controllers/itemController');

router.get('/', itemController.showItems);
router.get('/:id', itemController.showItemDetail);
router.post('/', itemController.createItem);

module.exports = router;