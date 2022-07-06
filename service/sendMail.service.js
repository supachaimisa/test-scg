const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
require('dotenv').config()
const sendMailService = (mailContent) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.MAILFROM,
          pass: process.env.MAILPASS
        }
      });

    let isTemplatePath = "";
    switch (mailContent.templateID) {
      case 1:
        isTemplatePath = "../public/app/emails/template1.html";
        break;
      default:
        isTemplatePath = "../public/app/emails/template2.html";
        break;
    }
    
    const filePath = path.join(__dirname, isTemplatePath);
    const source = fs.readFileSync(filePath, "utf-8").toString();
    const template = handlebars.compile(source);
    const replacements = {
      subject: mailContent.subject,
    };
    const htmlToSend = template(replacements);

    const mailOptions = {
      from: process.env.MAILFROM,
      to: mailContent.to,
      subject: mailContent.subject,
      message: mailContent.message,
      html: htmlToSend,
      headers: { "x-myheader": "test header" },
    };
    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
          resolve(false)
        } else {
          console.log("Email sent: " + info.response);
          resolve(true)
        }
      });
    })
    
  }
module.exports.sendMailService = sendMailService;
