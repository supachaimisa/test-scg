const express = require("express")
const router = express.Router();
const { getToken } = require("../service/auth.service")
router.post('/gettoken',(req,res)=>{
    const body = req.body
    res.send(getToken(body.pass))
})
module.exports = router