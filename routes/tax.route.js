const express = require("express")
const router = express.Router();
const { getToken } = require("../service/auth.service")
router.post('/caltaxperson',(req,res)=>{
    const body = req.body
    res.send(getToken(body.pass))
})
module.exports = router