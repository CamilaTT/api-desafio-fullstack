const userModel = require('../models/userModel');
const checkToken = require('../middleware/auth');
const requestHeader = require('../middleware/requestHeader');
const cors = require('cors')

module.exports = app => {

//----------------------Public routes-----------------------

  app.post('/user/login', cors(), (req, res) => {
    const user = req.body 
    userModel.login(user, res)
  })
  
  app.post('/user/signup', requestHeader, (req, res) => {
    const user = req.body
    userModel.registerUser(user, res)
  })

//----------------------Private routes----------------------

  app.get('/user/:id', requestHeader, checkToken, async (req, res) => {
    const id = parseInt(req.params.id)
    userModel.getUserById(id, res)    
  })

  app.patch('/user/:id', requestHeader, checkToken, (req, res) => {
      const id = parseInt(req.params.id)
      const values = req.body 
      userModel.updateUser(id, values, res)
  })

  app.delete('/user/:id', requestHeader, checkToken, (req, res) => {
      const id = parseInt(req.params.id)
      userModel.deleteUser(id, res)
  }) 
}
