const mongoose = require('mongoose')
const Schema = mongoose.Schema

const resultSchema = new Schema({
  userId: {
    ref: 'users',
    type: Schema.Types.ObjectId
  },
  testId: {
    ref: 'tests-infos',
    type: Schema.Types.ObjectId
  },
  // category: {
  //   ref: 'categories',
  //   type: Schema.Types.ObjectId
  // },
  rightAnswer: {
    type: String,
    default: ''
  },
  templateWithAnswer: {
    type: String,
    default: ''
  },
  uuid: {
    type: String,
    default: ''
  },
  summaryAnswer: {
    type: String,
    default: ''
  },
  testPassed: {
    type: Boolean,
    default: false
  },
  datePassed: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('test-results', resultSchema)
