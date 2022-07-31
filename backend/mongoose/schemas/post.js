/* eslint-disable comma-dangle */
const { model, Schema } = require('mongoose')

// creamos los posts de los users con relacion hacia los users.
const postSchema = new Schema({
  title: String,
  content: String,
  date: Date,
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User'
  // }
})

// creamos el modelo de los posts
const Post = model('Post', postSchema)

module.exports = Post

// const post = new Post({
//   title: 'DB con Mongoose',
//   content: 'creando una base de datos con mongoose',
//   date: new Date(),
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
