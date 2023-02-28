const router = require('express').Router();
const userRoutes = require('./userRoutes');
const logRoutes = require('./logRoutes');
const workoutRoutes = require('./workoutRoutes');

router.use('/users', userRoutes);
router.use('/log', logRoutes);
router.use('/workout', workoutRoutes);

module.exports = router;
