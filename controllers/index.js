const router = require('express').Router();
const workout = require('./workoutRoutes');
const home = require('./homeRoutes')

router.use('/',home);
router.use('/api/workouts', workout);

module.exports = router;
