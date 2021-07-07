const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

// Define userSchema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    unique: false,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

// Define schema methods
userSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password)
  },
  hashPassword: (plainTextPassword) => {
    return bcrypt.hashSync(plainTextPassword, 10)
  },
}

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
  if (!this.password) {
    next()
  } else {
    this.password = this.hashPassword(this.password)
    next()
  }
})

module.exports = mongoose.model('User', userSchema)
