const captainController = require('../controllers/captain.controller')
const express = require('express')
const router = express.Router()
const {body} = require('express-validator')


router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 charecters long'),
    body('password').isLength({min:6}).withMessage('password must be at least 3 charecters long'),
    body('vehicle.color').isLength({min:3}).withMessage('color must be at least 3 charecters long'),
    body('vehicle.plate').isLength({min:3}).withMessage('plate must be at least 3 charecters long'),
    body('vehicle.capacity').isLength({min:31}).withMessage('capacity must be at least 3 charecters long'),
    body('vicle.vehicleType').isIn(['car','auto','motorcycle']).withMessage('Invalid vehicle Type')
],
    captainController.registerCaptain
)


module.exports = router