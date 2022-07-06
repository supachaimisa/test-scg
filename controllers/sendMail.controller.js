const sendMailService = require('../service/sendMail.service')
const sendMailController = {
  sendMail: (req,res) => {
    const body = req.body
    res.send(sendMailService(body))
  }
};
module.exports = sendMailController;
