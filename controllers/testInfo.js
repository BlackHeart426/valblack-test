const testInfo = require('../models/TestInfo')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async function(req, res) {
  try {
    const data = await testInfo.find()
    res.status(200).json(data)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.getById = async function(req, res) {
  try {
    const data = await testInfo.findById(req.params.id)
    res.status(200).json(data)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.remove = async function(req, res) {
  try {
    await testInfo.remove({_id: req.params.id})
    res.status(200).json({
      message: 'Тест удален.'
    })
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.create = async function(req, res) {
  const data = new testInfo({
    name: req.body.name,
    questions: req.body.questions,
    durationOfTime: req.body.durationOfTime,
    rating: req.body.rating,
    category: req.body.category,
    imageSrc: req.body.imageSrc,
    questionsAndAnswers: req.body.questionsAndAnswers
  })

  try {
    await data.save()
    res.status(201).json(data)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.update = async function(req, res) {
  const updated = {
    name: req.body.name
  }

  if (req.file) {
    updated.imageSrc = req.file.path
  }

  try {
    const category = await testInfo.findOneAndUpdate(
      {_id: req.params.id},
      {$set: updated},
      {new: true}
    )
    res.status(200).json(category)
  } catch (e) {
    errorHandler(res, e)
  }
}
