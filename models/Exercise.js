const { model, Schema } = require('mongoose')


const Exercise = new Schema({
    name: String,
    duration: Number,
    distance: Number,
    weight: Number,
    reps: Number,
    sets: Number
})

module.exports = model('Exercise', Exercise)