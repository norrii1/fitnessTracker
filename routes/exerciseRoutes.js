const router = require('express').Router()
const { Exercise, Workout } = require('../models')

//GET all exercises
router.get('/exercises', (req, res) => Exercise.find()
.populate('workout')
  .then(exercises => res.json(exercises))
  .catch(err => console.log(eexercise)))

//GET exercises in range 
router.get('/exercises/range', (req, res) => Exercise.aggregate([
  {
    $addFields: {
      totalWeight: {
        $sum: 'exercises.weight'
      }
    }
  }
])
.then(exercises => res.json(exercises))
.catch(err => console.log(err)))

  //GET one exercise
router.get('/exercise/:id', (req, res) => Exercise.findById(req.params.id)
  .populate('workout')
    .then(exercise => res.json(exercise))
    .catch(err => console.log(err)))

//POST an exercise
router.post('/exercise', (req, res) => Exercise.create(req.body)
    .then(exercise => Workout.findByIdAndUpdate(exercise.day, { $push: { exercises: exercise._id} })
        .then(() => res.json(exercise))
        .catch(err => console.log(err)))
    .catch(err => console.log(err)))

//UPDATE an exercise 
router.put('/exercises/:id', (req, res) => Exercise.findByIdAndUpdate(req.params.id, { $set: req.body })
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err)))

//DELETE an exercise
router.delete('/exercises/:id', (req, res) => Exercise.findByIdAndDelete(req.params.id)
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err)))

module.exports = router