const express = require('express')
const router = express.Router()
const { uploadFile } = require('../controllers/upload.controller')
const { upload } = require("../service/files.service");

router.post('/', upload.single('myFile'), uploadFile)

module.exports = router