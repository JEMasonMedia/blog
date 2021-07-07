const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const cors = require('cors')
const passport = require('./passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')

// Load config
dotenv.config({ path: './config/config.env' })

// Route requires
const userAuth = require('./routes/users/userAuth')

// DB conn
const dbConnection = require('./database')

// Create app
const app = express()

// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
)

//session configuration
const mongoStore = MongoStore.create({
  mongoUrl: process.env.MONGO_URI,
  collectionName: 'sessions',
  ttl: 129600,
})

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    store: mongoStore,
    resave: false,
    saveUninitialized: false,
  })
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Static folder
// app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/userauth', require('./routes/users/userAuth'))
// app.use('/stories', require('./routes/stories'))

// app.get('/', (req, res) => {
//   res.json({ msg: 'this worked' })
// })

const PORT = process.env.PORT || 4000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
