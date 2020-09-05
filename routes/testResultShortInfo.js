const express = require('express')
const upload = require('../middleware/upload')
const router = express.Router()
const passport = require('passport')
const controller = require('../controllers/testResultShortInfo')


router.post('/',
  // passport.authenticate('jwt', {session: false}),
  controller.create)
router.get('/:userId',
  // passport.authenticate('jwt', {session: false}),
  controller.getByUser)

module.exports = router
