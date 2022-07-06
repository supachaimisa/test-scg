const { sendMailService } = require('../service/sendMail.service')
const Mail = {
  sendMail: (req,res) => {
    const body = req.body
    res.send(sendMailService(body))
  }
};
module.exports = Mail;
