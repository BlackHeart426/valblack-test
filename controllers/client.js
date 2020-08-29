const Client = require('../models/Client')
const errorHandler = require('../utils/errorHandler')

module.exports.update = async function(req, res) {
  console.log('server')
  try {
    const client = await new Client({
      avatarUrl: req.file ? req.file.path : ''
    }).save()
    res.status(201).json(client)
  } catch (e) {
    errorHandler(res, e)
  }
}
