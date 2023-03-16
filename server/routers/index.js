const router = require('express').Router();
const errorHandler = require('../middlewares/errorHandler');
const userRouter = require('./users');

router.use('/users', userRouter);

router.use(errorHandler);

module.exports = router;