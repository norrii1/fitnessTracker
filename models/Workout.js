const { model, Schema } = require('mongoose')

const Workout = new Schema({
  day: {
    type: Date,
    default: new Date
  },
  exercises: [
    { 
    type: {
      type: String
    },
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number 
  }
]
})

module.exports = model('Workout', Workout) 