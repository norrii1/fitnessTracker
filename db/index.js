module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/workoutdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
