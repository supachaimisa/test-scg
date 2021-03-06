const express = require('express')
const router = express.Router()
const { sendMail } = require('../controllers/mail.controller')
const { verifyToken } = require("../service/auth.service")
router.post('/', verifyToken, sendMail)

module.exports = router