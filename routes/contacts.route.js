const express = require('express')
const router = express.Router()
const contactsController = require('../controllers/contacts.controller')

router.get('/list', contactsController.listAll)
router.post('/setgroup', contactsController.setGroup)
router.post('/setcontact', contactsController.setContact)
router.post('/getcontactbygroup', contactsController.getContactByGroup)

module.exports = router