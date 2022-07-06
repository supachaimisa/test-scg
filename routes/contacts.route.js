const express = require('express')
const router = express.Router()
const { getListAll, addGroup, addContact, getContactByGroup } = require('../controllers/contacts.controller')
const { verifyToken } = require("../service/auth.service")
router.get('/getlistall', verifyToken, getListAll)
router.post('/addgroup', verifyToken, addGroup)
router.post('/addcontact', verifyToken, addContact)
router.post('/getcontactbygroup', verifyToken, getContactByGroup)

module.exports = router