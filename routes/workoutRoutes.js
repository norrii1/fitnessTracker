const router = require('express').Router()
const { Workout } = require('../models')

// GET all workouts
router.get('/workouts', (req, res) => Workout.aggregate([
  {
    $addFields: {
      totalDuration: {
        $sum: '$exercises.duration'
      }
    }
  }
])
    .then(workouts => res.json(workouts))
    .catch(err => console.log(err)))

router.get('/workouts/range', (req, res) => {
  Workout.find({})
    .limit(7)
    .then((data) => res.json(data))
    .catch((err) => console.log(err))
})

// GET one workout 
router.get('/workouts/:id', (req, res) => Workout.findById(req.params.id)
  .populate('exercises')
    .then(workout => res.json(workout))
    .catch(err => console.log(err)))

// POST a workout
router.post('/workouts', (req, res) => {
  const date = { ...req.body, day: new Date().setDate(new Date().getDate() - 10)}
  Workout.create(date)
  .then(workout => res.json(workout))
  .catch(err => console.log(err))
})

  // UPDATE a workout
router.put('/workouts/:id', (req, res) => Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true, runValidators: true})
  .then(workout => res.json(workout))
  .catch(err => console.log(err)))

// DELETE a workout 
router.delete('/workouts/:id', (req, res) => Workout.findByIdAndDelete(req.params.id)
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err)))

module.exports = router