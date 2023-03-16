const router = require('express').Router();
const errorHandler = require('../middlewares/errorHandler');
const userRouter = require('./users');
const itemRouter = require('./items');
const authentication = require('../middlewares/authentication');

router.use('/users', userRouter);
router.use('/items', authentication, itemRouter);

router.use(errorHandler);

module.exports = router;