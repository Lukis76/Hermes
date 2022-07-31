require('dotenv').config({ path: '../.env' })
require('./mongoose/connect')
// const User = require('./mongoose/scremas/user')
const express = require('express')

const app = express()
const cors = require('cors')
const Post = require('./mongoose/schemas/post')

app.use(cors())
app.use(express.json())

// let posts = []

const puerto = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/posts', (req, res) => {
  Post.find({}).then(posts => {
    res.json(posts)
  })
})

app.get('/api/notes/:id', (req, res) => {
  const id = req.params
  console.log({ id })
  res.send(id)
})

app.listen(puerto, () => {
  console.log(`Server is running on port => ${puerto}`)
})
