const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
    return conn.connection
  } catch (err) {
    console.error(err)
    process.exit(1)
    return null
  }
}

module.exports = connectDB()

// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
//   })
//   .then(
//     () => {
//       //   console.log(`MongoDB Connected: ${conn.connection.host}`)
//     },
//     (err) => {
//       console.log('error connecting to Mongo: ')
//       console.log(err)
//     }
//   )

// module.exports = mongoose.connection
