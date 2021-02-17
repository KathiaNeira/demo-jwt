const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./controllers').controller
const port = 3000

const app = express()

app.use(bodyParser.json())

app.post('/login', controller.login)
app.get('/listUsers', controller.listUser)

app.listen(port, () => {
  console.log(`App listening on the port ${port}`)
})