const express = require("express");
const PORT = process.env.PORT || 5000;

const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/send", (req, res) => {
    res.send({ express: "Hello From Express" });
});

app.post("/send", (req, res) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        secure: false,
        service: "SendGrid",
        auth: {
            user: "DamirOstojic",
            pass: "123qwe!@#",
        },
    });
    // setup email data with unicode symbols
    let mailOptions = {
        from: req.body.from, // sender address
        to: req.body.to, // list of receivers
        subject: req.body.subject, // Subject line
        text: req.body.text, // plain text body
        html: "<b>From my app</b>", // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log("Message sent: %s", info.messageId);
    });
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
