const nodemailer = require("nodemailer");

function generateEmail(){
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hussienk2011@gmail.com',
      pass: ''
    }
  });
  
  var mailOptions = {
    from: 'hussienk2011@gmail.com',
    to: 'hussienk2011@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'GOMYCODE is a place to be if you are serious about learning how to code!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
 
module.exports = generateEmail;
