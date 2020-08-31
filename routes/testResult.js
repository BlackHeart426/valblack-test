const express = require('express')
const upload = require('../middleware/upload')
const router = express.Router()
const passport = require('passport')
const controller = require('../controllers/testResult')


router.post('/:id',
  // passport.authenticate('jwt', {session: false}),
  controller.create)


module.exports = router
