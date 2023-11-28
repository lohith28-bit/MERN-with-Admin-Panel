const express = require('express')
const router = express.Router()
const Contact = require('../controller/contact-controller')

router.route('/contact').post(Contact)

module.exports = router