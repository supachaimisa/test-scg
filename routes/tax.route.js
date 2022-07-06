const express = require("express")
const router = express.Router();
const { calTaxPersons } = require("../controllers/tax.controller")
const { verifyToken } = require("../service/auth.service")
router.post('/caltaxperson', verifyToken, calTaxPersons)
module.exports = router