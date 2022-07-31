// require('dotenv').config({ path: './.env' })
const mongoose = require('mongoose')
// const { model, Schema } = require('mongoose')

const connectionString = `mongodb+srv://hermes:${process.env.MONGO_PWS}@clusterhermes.ckxxpet.mongodb.net/?retryWrites=true&w=majority`

// nos conectamos a la base de datos
mongoose
  .connect(connectionString)
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((err) => {
    console.log(err)
  })

// creamos los posts de los users con relacion hacia los users.
// const postSchema = new Schema({
//   title: String,
//   content: String,
//   date: Date
//   // user: {
//   //   type: Schema.Types.ObjectId,
//   //   ref: 'User'
//   // }
// })

// // creamos el modelo de los posts
// const Post = model('Post', postSchema)

// const post = new Post({
//   title: 'DB con Mongoose',
//   content: 'creando una base de datos con mongoose',
//   date: new Date()
// })

// post
//   .save()
//   .then((res) => {
//     console.log(res)
//     mongoose.connection.close()
//   })
//   .catch((err) => {
//     console.log(err)
//   })
