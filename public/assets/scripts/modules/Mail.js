var nodeMailer = require('nodemailer');

class Mail {
  constructor() {
    this.submitBtn = document.getElementById('submit');

    this.events();
  }

  events() {
    this.submitBtn.onclick = this.mailSend.bind(this);
  }

  mailSend(name, address, subject, message) {
    console.log(name);
    var transporter = nodeMailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'Oilmylife2017@gmail.com',
        pass: 'My02boys!'
      }
    });

    // Building e-mail message
    var mailOptions = {
      from: address,
      to: 'Oilmylife2017@gmail.com',
      subject: 'Website contact: ' + name + ' - ' + subject,
      text: message
    };

    // Send mail and handle errors
    transporter.sendMail(mailOptions, function(error, info) {
      if(error) {
        return console.log(error.toString());
      }
      console.log('Message sent:', info.messageId, info.response);
    });
  }
}

export default Mail;
