const express = require('express')
const router = express.Router()
const User = require('../../database/models/User')
const passport = require('../../passport')
const { ensureAuth } = require('../../passport/auth')

// sign up
router.post('/', (req, res) => {
  const { username, password } = req.body
  // ADD VALIDATION
  User.findOne({ username: username }, (err, user) => {
    if (err) {
      res.status(400).json({ msg: 'Invalid Credentials', err })
    } else if (user) {
      res.status(400).json({
        msg: 'Invalid Credentials',
        err: `Sorry, already a user with that username/email.: ${username}`,
      })
    } else {
      const newUser = new User({
        username: username,
        password: password,
      })
      newUser.save((err, savedUser) => {
        if (err) return res.status(500).json({ msg: 'Server Error', err })
        var userInfo = {
          username: savedUser.username,
        }
        res.status(200).json({
          msg: 'User Created',
          userInfo,
        })
      })
    }
  })
})

// login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err)

    if (!user) return res.status(400).json({ msg: 'Invalid Credentials' })

    req.logIn(user, (err) => {
      if (err) return next(err)

      return res.redirect('/userauth/self')
    })
  })(req, res, next)
})

// get self, possible params
router.get('/self', ensureAuth, (req, res, next) => {
  if (req.user) {
    res.status(200).json({ user: req.user })
  } else {
    res.status(200).json({ user: null })
  }
})

// logout
router.post('/logout', (req, res) => {
  if (req.user) {
    req.logOut()
    res.clearCookie('connect.sid')
    req.session.destroy((err) => {
      res.send({ msg: 'Logged Out' })
    })
  } else {
    res.status(200).send({ msg: 'None to Log Out' })
  }
})

module.exports = router
