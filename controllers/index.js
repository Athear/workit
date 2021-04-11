const router = require('express').Router();
const workout = require('./workoutRoutes');

router.use('/api/workout', workout);

module.exports = router;
