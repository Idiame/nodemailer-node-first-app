const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'germanmazku@gmail.com', // generated ethereal user
    pass: 'hxrqvmmscviwujdo', // generated ethereal password
  },
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/contact',async(req,res)=>{
    // send mail with defined transport object
    await transporter.sendMail({
      from: '"Fred Foo 👻" <germanmazku@gmail.com>', // sender address
      to: "alexander.manap@gmail.com, mazkupeke@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      // html: "<b>Hello world?</b>", // html body
    });
    res.redirect('/contact')
})

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

module.exports = router;