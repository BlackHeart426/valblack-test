const mongoose = require('mongoose')
const Schema = mongoose.Schema

const testsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  questions: {
    type: String,
    default: ''
  },
  durationOfTime: {
    type: String,
    default: ''
  },
  imageSrc: {
    type: String,
    default: ''
  },
  category: {
    ref: 'categories',
    type: Schema.Types.ObjectId
  },
  rating: {
    type: String,
    default: ''
  }
})

module.exports = mongoose.model('tests-info', testsSchema)
