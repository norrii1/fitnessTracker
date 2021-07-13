const router = require('express').Router( )

router.use('/api', require('./workoutRoutes'))
router.use('/api', require('./viewRoutes'))

module.exports = router
