const { sendMailService } = require('../service/sendMail.service')
const Mail = {
  sendMail: async (req,res) => {
    try {
      const body = req.body
        const r = await sendMailService(body)
        if(!r){
          throw new Error("Can't send email.")
        }
        res.send("Email sent !")
    } catch (error) {
        throw new Error("Can't send email something errors.")
    }
    
  }
};
module.exports = Mail;
