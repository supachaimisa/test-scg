
class SendMail {
  constructor(nodemailer, path, fs, handlebars, mail, pass) {
    this.handlebars = handlebars
    this.path = path
    this.fs = fs
    this.mail = mail
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: mail,
        pass: pass
      }
    });
  }

  sendMailTo(mailContent) {
    let isTemplatePath = '';
    switch(mailContent.templateID){
      case 1 : 
      isTemplatePath = '/public/app/emails/template1.html'
      break
      default: 
      isTemplatePath = '/public/app/emails/template2.html'
      break
    }
    const filePath = this.path.join(__dirname, isTemplatePath);
    const source = this.fs.readFileSync(filePath, 'utf-8').toString();
    const template = this.handlebars.compile(source);
    const replacements = {
        subject: mailContent.subject
    };
    const htmlToSend = template(replacements);

    const mailOptions = {
      from: this.mail,
      to: mailContent.to,
      subject: mailContent.subject,
      message: mailContent.message,
      html: htmlToSend,
      headers: { 'x-myheader': 'test header' }
    };
    
    this.transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
}

module.exports.SendMail = SendMail
