const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
app.use(express.json());

app.listen(3000, () => console.log("Server is running on port 3000"));

try {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });
  let mailOptions = {
    from: '"nndev" <nndev@example.com>', // sender address
    to: "test1@example.com, test2@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
} catch (err) {
  console.log(err);
}
