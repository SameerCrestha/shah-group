// const nodemailer = require('nodemailer');

// const sendMail = () => {
//   var transporter = nodemailer.createTransport({
//     service: 'smtp',
//     auth: {
//       user: 'divasregmi@gmail.com',
//       pass: 'bhhallmjhpiofipd',
//     },
//   });

//   let mailOptions = {
//     from: '"FROM ' + 'Divas Regmi' + ' 👻" <' + 'divasregmi@gmail.com' + '>',
//     to: 'divasregmi@gmail.com', // list of receivers
//     subject: 'Please Verify Your Email Address ✔',
//     html: `
//                   Hi,
//                   Thank you for choosing for <strong>Nodemailer</strong>' .
//                   <br/>
//                   To complete the change/add password process, please click  <a href="www.facebook.com">Verify</a> link and verify through the pasword change process.
//                   - from Divas  team.`,
//   };

//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });
// };

// sendMail();
