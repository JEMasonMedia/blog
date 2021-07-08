const express = require('express')
const router = express.Router()
const User = require('../../database/models/User')
const passport = require('../../passport')
const { ensureAuth } = require('../../passport/auth')
const Utils = require('../../utils/utils')

// sign up
router.post('/register', (req, res) => {
  const { username, password } = req.body
  // ADD VALIDATION
  User.findOne({ username: username }, (err, user) => {
    if (err) {
      res.status(400).json({ msg: 'Invalid Credentials' })
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
      newUser.save((err, user) => {
        if (err) return res.status(500).json({ msg: 'Server Error' })

        delete user.password
        delete user.date

        res.status(200).json({
          msg: 'User Created',
          user,
        })
      })
    }
  })
})

// login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      res.clearCookie('connect.sid')
      req.session.destroy((err) => {
        res.status(304).json({ msg: 'Error Occurred' })
      })
      return next(err)
    }

    if (!user) return res.status(400).json({ msg: 'Invalid Credentials' })

    req.logIn(user, (err) => {
      if (err) {
        res.clearCookie('connect.sid')
        req.session.destroy((err) => {
          res.status(304).json({ msg: 'Error Occurred' })
        })
        return next(err)
      }

      delete user._doc.password
      delete user._doc.date

      if (req.body.rememberme)
        req.session.cookie.maxAge = 90 * 24 * 60 * 60 * 1000

      return res.status(200).json({ user })
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
      res.status(200).send({ msg: 'Logged Out' })
    })
  } else {
    res.status(304).send({ msg: 'None to Log Out' })
  }
})

module.exports = router
