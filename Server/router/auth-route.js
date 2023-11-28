const express = require('express')
const router = express.Router()
const auth_controller = require('../controller/auth-controller')
const signupSchema = require('../validator/auth-validator')
const validator = require('../middleware/validate-middleware')

router.route('/').get(auth_controller.home)

router.route('/registration').post(validator(signupSchema), auth_controller.registration)

router.route('/login').post(auth_controller.login)

module.exports = router