const express = require('express')

const router = express.Router()

const {body,query} = require('express-validator')

const rideController = require('../controllers/ride.controller')

const authMiddleware = require('../middlewares/auth.middleware')

router.post('/create',(req,res)=>{
    authMiddleware.authUser,
    body('pickup').isString().isLength({min:3}).withMessage('Invalid Pickup Location')
    body('destination').isString().isLength({min:3}).withMessage('Invalid destination Address')
    body('vehicleType').isString().isIn(['auto','car','moto']).withMessage('Invalid vehicle type'),
    rideController.createRide
})

router.get('/get-fare',
    authMiddleware.authUser,
    query('pickup').isString().isLength({min:3}).withMessage("Invalid Pickup"),
    query('destination').isString().isLength({min:3}).withMessage('Invalid Destination'),
    rideController.getFare
)

module.exports = router