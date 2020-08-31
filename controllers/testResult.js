const testResult = require('../models/TestResult')
const errorHandler = require('../utils/errorHandler')
const moment = require('moment')

// module.exports.getAll = async function(req, res) {
//   try {
//     const data = await testsInfo.find()
//     res.status(200).json(data)
//   } catch (e) {
//     errorHandler(res, e)
//   }
// }

// module.exports.getById = async function(req, res) {
//   try {
//     const data = await testsInfo.findById(req.params.id)
//     res.status(200).json(data)
//   } catch (e) {
//     errorHandler(res, e)
//   }
// }

// module.exports.remove = async function(req, res) {
//   try {
//     await testsInfo.remove({_id: req.params.id})
//     res.status(200).json({
//       message: 'Тест удален.'
//     })
//   } catch (e) {
//     errorHandler(res, e)
//   }
// }

module.exports.create = async function(req, res) {
  const data = new testResult({
    userId: req.params.id,
    testId: req.body.testId,
    category: req.body.category,
    rightAnswer: req.body.rightAnswer,
    summaryAnswer: req.body.summaryAnswer,
    testPassed: req.body.testPassed
  })

  console.log(data)

  try {
    await data.save()
    res.status(201).json(data)
  } catch (e) {
    errorHandler(res, e)
  }
}

// module.exports.update = async function(req, res) {
//   const updated = {
//     name: req.body.name
//   }
//
//   if (req.file) {
//     updated.imageSrc = req.file.path
//   }
//
//   try {
//     const category = await testsInfo.findOneAndUpdate(
//       {_id: req.params.id},
//       {$set: updated},
//       {new: true}
//     )
//     res.status(200).json(category)
//   } catch (e) {
//     errorHandler(res, e)
//   }
// }
