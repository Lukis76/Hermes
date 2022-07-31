require('./mongoose/connect')
// const User = require('./mongoose/scremas/user')
// const Post = require('./mongoose/scremas/post')
const express = require('express')

const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

require('dotenv').config({ path: './.env' })
const puerto = process.env.PORT || 4000

const notas = [
  {
    id: 1,
    nombre: 'lucas',
    edad: 18,
    respuesta: 'si'
  },
  {
    id: 2,
    nombre: 'Juan',
    edad: 20,
    respuesta: 'no'
  }
]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (req, res) => {
  res.json(notas)
})

app.get('/api/notes/:id', (req, res) => {
  const id = req.params
  console.log({ id })
  res.send(id)
})

app.listen(puerto, () => {
  console.log(`Server is running on port => ${puerto}`)
})
