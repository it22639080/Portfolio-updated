const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();

// server used to send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running on port 5000"));

const contactEmail = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // use TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

contactEmail.verify((error) => {
  if (error) {
    console.log("Email verification error:", error);
  } else {
    console.log("Ready to Send Emails");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + " " + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  
  const mail = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: "Contact Form Submission - Portfolio",
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Phone:</strong> ${phone}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  };
  
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log("Error sending email:", error);
      res.json({ code: 500, status: "Error sending message" });
    } else {
      console.log("Email sent successfully");
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});