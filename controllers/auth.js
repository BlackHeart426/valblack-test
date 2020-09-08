const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const keys = require('../config/keys')
// const Client = require('../models/Client')
const errorHandler = require('../utils/errorHandler')
const randtoken = require('rand-token')

const tokenList = {}

module.exports.loginAdmin = async function(req, res) {
  const candidate = await User.findOne({email: req.body.email})
  if (candidate) {
    // Проверка пароля, пользователь существует
    const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
    if (passwordResult) {
      // Генерация токена, пароли совпали
      const token = jwt.sign({
        email: candidate.email,
        userId: candidate._id
      }, keys.jwt, {
        expiresIn: '15m'
      })

      const refreshToken = jwt.sign({
        email: candidate.email,
        userId: candidate._id
      }, keys.jwt, {
        expiresIn: '86400'
      })

      res.status(200).json({
        token: `Bearer ${token}`
      })
    } else {
      // Пароли не совпали
      res.status(401).json({
        message: 'Пароли не совпадают. Попробуйте снова.'
      })
    }
  } else {
    // Пользователя нет, ошибка
    res.status(404).json({
      message: 'Пользователь с таким email не найден.'
    })
  }
}

// module.exports.rejectToken = async function (req, res, nexr) {
//   let refreshToken = req.body.refreshToken
//   if (refreshToken) {
//
//   }
// }

module.exports.refreshToken = async function(req, res) {
  const dateCreateToken = Date.now()
  const refreshTokenUuid = req.params.refreshToken
  if ((refreshTokenUuid) && (refreshTokenUuid in tokenList)) {

    const token = jwt.sign({
      email: tokenList[refreshTokenUuid].email,
      userId: tokenList[refreshTokenUuid]._id
    }, keys.jwt, {expiresIn: 60 * 60})

    const avatarUrl = tokenList[refreshTokenUuid].avatarUrl
    const name = tokenList[refreshTokenUuid].name
    const email = tokenList[refreshTokenUuid].email
    const isAdmin = tokenList[refreshTokenUuid].isAdmin
    const _id = tokenList[refreshTokenUuid]._id

    delete tokenList[refreshTokenUuid]

    const refreshToken = randtoken.uid(256)

    const data = {
      token: `Bearer ${token}`,
      refreshToken,
      email,
      avatarUrl,
      name,
      isAdmin,
      _id,
      dateCreateToken
    }

    tokenList[refreshToken] = data
    res.status(200).json(data)

  } else {
    res.status(404).send('Invalid request')
  }
}

module.exports.login = async function(req, res) {
  const candidate = await User.findOne({email: req.body.email})
  const dateCreateToken = Date.now()
  if (candidate) {
    // Проверка пароля, пользователь существует
    const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
    if (passwordResult) {
      // Генерация токена, пароли совпали
      const token = jwt.sign({
        email: candidate.email,
        userId: candidate._id
      }, keys.jwt, {expiresIn: 60 * 60})

      const refreshToken = randtoken.uid(256)
      const data = {
        token: `Bearer ${token}`,
        refreshToken: refreshToken,
        email: req.body.email,
        avatarUrl: candidate.imageSrc,
        name: candidate.name,
        isAdmin: false,
        _id: candidate._id,
        dateCreateToken
      }
      tokenList[refreshToken] = data
      res.status(200).json(data)
    } else {
      // Пароли не совпали
      res.status(401).json({
        message: 'Пароли не совпадают. Попробуйте снова.'
      })
    }
  } else {
    // Пользователя нет, ошибка
    res.status(404).json({
      message: 'Пользователь с таким email не найден.'
    })
  }
}


module.exports.registerAdmin = async function(req, res) {
  // email password
  const candidate = await User.findOne({email: req.body.email})

  if (candidate) {
    // Пользователь существует, нужно отправить ошибку
    res.status(409).json({
      message: 'Такой email уже занят. Попробуйте другой.'
    })
  } else {
    // Нужно создать пользователя

    const salt = bcrypt.genSaltSync(10)
    const password = await req.body.password
    const user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(password, salt)
    })

    try {
      await user.save()
      res.status(201).json(user)
    } catch(e) {
      errorHandler(res, e)
    }

  }
}

module.exports.register = async function(req, res) {
  // email password
  const candidate = await User.findOne({email: req.body.email})

  if (candidate) {
    // Пользователь существует, нужно отправить ошибку
    res.status(409).json({
      message: 'Такой email уже занят. Попробуйте другой.'
    })
  } else {
    // Нужно создать пользователя

    const salt = bcrypt.genSaltSync(10)
    const password = await req.body.password
    const user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(password, salt),
      isAdmin: false
    })

    try {
      await user.save()
      res.status(201).json(user)
    } catch(e) {
      errorHandler(res, e)
    }

  }
}
