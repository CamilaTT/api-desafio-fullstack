const vehicleModel = require('../models/vehicleModel')
const requestHeader = require('../middleware/requestHeader');

module.exports = app => {
    
    app.get('/vehicle', requestHeader, (req, res) => {
        vehicleModel.listVehicles(res)
    })

    app.get('/vehicle/:id', requestHeader, (req, res) => {
        const id = parseInt(req.params.id)
        vehicleModel.selectVehicleById(id, res)
    })

    app.post('/vehicle', requestHeader, (req, res) => {
        const VEHICLE = req.body;
        vehicleModel.addVehicle(VEHICLE, res)
    })

    app.put('/vehicle/:id', requestHeader, (req, res) => {
        const id = parseInt(req.params.id)
        const values = req.body 
        vehicleModel.updateVehicle(id, values, res)
    })

    app.delete('/vehicle/:id', requestHeader, (req, res) => {
        const id = parseInt(req.params.id)
        vehicleModel.deleteVehicle(id, res)
    }) 
}
