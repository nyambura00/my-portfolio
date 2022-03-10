const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());

//configuring the transporter object
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
});

//testing the transporter
transporter.verify((err, success) => {
    err
      ? console.log(err)
      : console.log(`=== Server is ready to take messages: ${success} ===`);
});

//setting up a sendmail route
app.post("/sendmail", function (req, res){
  let mailOptions = {
      from: `${req.body.mailerState.email}`,
      to: process.env.EMAIL,
      subject: `Message from: ${req.body.mailerState.email}`,
      text: `${req.body.mailerState.message}`,
  };

  transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        console.log("Error " + err);
        res.json({
          status: "fail",
        });
      } else {
        console.log("Email sent successfully");
        res.json({status: "Email sent successfully!"}) //response action
      }
  });
})

const port = 3001;
app.listen(port, () => {
 console.log(`Server is running on port: ${port}`);
});