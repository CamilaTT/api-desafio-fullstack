const userModel = require('../models/userModel');
const checkToken = require('../middleware/auth');
const addRequestHeader = require('../middleware/requestHeader');

module.exports = app => {
    
    app.use(addRequestHeader);

//----------------------Public routes-----------------------

  app.post('/user/login', addRequestHeader, (req, res) => {
    const user = req.body 
    userModel.login(user, res)
  })
  
  app.post('/user/signup', addRequestHeader, (req, res) => {
    const user = req.body
    userModel.registerUser(user, res)
  })

//----------------------Private routes----------------------

  app.get('/user/:id', checkToken, async (req, res) => {
    const id = parseInt(req.params.id)
    userModel.getUserById(id, res)    
  })

  app.patch('/user/:id', checkToken, (req, res) => {
      const id = parseInt(req.params.id)
      const values = req.body 
      userModel.updateUser(id, values, res)
  })

  app.delete('/user/:id', checkToken, (req, res) => {
      const id = parseInt(req.params.id)
      userModel.deleteUser(id, res)
  }) 
}
