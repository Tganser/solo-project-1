// requires
var express = require('express');
var router = express.Router();
var twilio = require('twilio');
// twilio info
var accountSid = 'ACee1e1ee9a4265df58db4d0bb6a1c2f0d';
var authToken = '7607abe91b1d0e3c38a9ac788d379d7f';

var client = new twilio(accountSid, authToken);

router.post('/sendMessage', function (req, res) {
  var random = Math.round((Math.random()));
  console.log('random->', random);
  var phoneNumberArray = [req.body.phoneOne, req.body.phoneTwo];
  var phoneNumber = phoneNumberArray[random]

  client.messages.create({
      body: 'Check in with' + ' ' + req.body.username + ', they need you.',
      to: phoneNumber,  // Text this number
      from: '+17634474833' // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
  });



module.exports = router;
