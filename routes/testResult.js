const express = require('express')
const upload = require('../middleware/upload')
const router = express.Router()
const passport = require('passport')
const controller = require('../controllers/testResult')


router.post('/',
  // passport.authenticate('jwt', {session: false}),
  controller.create)
router.get('/:uuid',
  // passport.authenticate('jwt', {session: false}),
  controller.getById)


module.exports = router
