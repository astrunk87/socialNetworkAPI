const router = require('express').Router();
const userRoutes = require('./userRoute');
const thoughtRoutes = require('./thoughtsRoute');

router.use('/user', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
