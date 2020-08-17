const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const path = require('path')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
// const analyticsRoutes = require('./routes/analytics')
const categoryRoutes = require('./routes/category')
const testsRoutes = require('./routes/tests')
const keys = require('./config/keys')
const app = express()

mongoose.connect(keys.mongoURI)
    .then(() => console.log('MongoDB connected.'))
    .catch(error => console.log(error))

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(require('morgan')('dev'))
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Work'
    })
})

app.use('/api/auth', authRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/tests', testsRoutes)

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/dist/sicilia-angular'))
//
//     app.get('*', (req, res) => {
//         res.sendFile(
//             path.resolve(
//                 __dirname, 'client', 'dist', 'sicilia-angular', 'index.html'
//             )
//         )
//     })
// }

module.exports = app
