const express = require('express')

const authMiddleware = require('../middlewares/auth.middleware')

const {getCoordinates} = require('../controllers/map.controller')
const router = express.Router()
const {query} = require('express-validator')

router.get('/get-coordinates',
    query('address').isString().isLength({min:3}),
    authMiddleware.authUser,getCoordinates)


module.exports = router;