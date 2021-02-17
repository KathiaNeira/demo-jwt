const jwt = require('jsonwebtoken')
const secret = 'f%LQ$Mx0RlUFvllgm6EaZd>Rcbl+cuR_QSohOIup'
const users = require('./listUser').users

const USER = 'test@gmail.com'
const PASSWORD =  'test@2021'
let token = ''

class Controller {
  login(request, response) {
    try {
      if(request.body.user !== USER || request.body.password !== PASSWORD) {
        res.status(400).send({
          message: 'Usuario o contraseña incorrectos'
        })
        return
      }
      const { user, password } = request.body;
      token = jwt.sign({ user, password }, secret)
      response.json({
        token
      })
    } catch (error) {

    }
  }

  listUser(request, response) {
    try {
      const decode = jwt.verify(token, secret)
      if (decode) {
        response.send({
          message: 'Solicitud exitosa',
          userName: decode.user,
          data: users
        })
      }
    } catch (error) {
      response.status(400).send({
        message: 'Token no existe'
      })
    }
  }
}

const controller = new Controller()
exports.controller = controller