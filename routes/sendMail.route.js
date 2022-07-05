const express = require('express')
const router = express.Router()
const sendMailController = require('../controllers/sendMail.controller')

router.post('/', sendMailController.sendMail)

module.exports = router