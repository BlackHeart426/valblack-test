const express = require('express')
const upload = require('../middleware/upload')
const router = express.Router()
const passport = require('passport')
const controller = require('../controllers/user')


router.patch('/avatar/:id',
  passport.authenticate('jwt', {session: false}),
  upload.single('image'),
  controller.update)


module.exports = router
