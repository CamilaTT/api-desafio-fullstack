const vehicledataModel = require('../models/vehicledataModel')
const requestHeader = require('../middleware/requestHeader');

module.exports = app => {
    
    app.get('/vehicledata', requestHeader, (req, res) => {
        let value = ''
        if(req.query.value) {
            value = req.query.value
        }
        vehicledataModel.listVehicleData(value, res)
    })

    app.get('/vehicledata/:id', requestHeader, (req, res) => {
        const id = parseInt(req.params.id)
        vehicledataModel.getVehicledataById(id, res)
    })

    app.post('/vehicledata', requestHeader, (req, res) => {
        const VEHICLE_DATA = req.body;
        vehicledataModel.addVehicleData(VEHICLE_DATA, res)
    })

    app.put('/vehicledata/:id', requestHeader, (req, res) => {
        const id = parseInt(req.params.id)
        const values = req.body 
        vehicledataModel.updateVehicleData(id, values, res)
    })

    app.delete('/vehicledata/:id', requestHeader, (req, res) => {
        const id = parseInt(req.params.id)
        vehicledataModel.deleteVehicleData(id, res)
    }) 
}
