'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// handle form submission
app.post('/send_email', (req, res) => {
    const { name, email, message } = req.body;

    // Create transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'Gmail', // Example: Gmail, SMTP configuration
        auth: {
            user: 'your_email@gmail.com',
            pass: 'your_password'
        }
    });

    // Mail options
    let mailOptions = {
        from: email,
        to: 'gracequinterp5766@gmail.com', 
        subject: 'New Contact Form Submission',
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong><br>${message}</p>`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Oops! Something went wrong.');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully!');
        }
    });
});

// Start server
const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));