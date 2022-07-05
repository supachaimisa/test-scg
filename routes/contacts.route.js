const express = require('express')
const router = express.Router()
const contactsController = require('../controllers/contacts.controller')

router.get('/getlistall', contactsController.getListAll)
router.post('/addgroup', contactsController.addGroup)
router.post('/addcontact', contactsController.addContact)
router.post('/getcontactbygroup', contactsController.getContactByGroup)

module.exports = router