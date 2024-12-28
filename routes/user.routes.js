const express = require('express')
const router = express.Router()
const {body} = require('express-validator')
const userController = require('../controllers/user.controller')
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least  3 charecters long'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 charecters long')
],
    userController.registerUser
)

router.post('/log-in',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 charecters long')
],
    userController.logInUser
)

router.get('/profile',authMiddleware.registerUser,userController.getUserProfile)

router.get('/logout',authMiddleware.authUser,userController.logOutUser)

module.exports = router;