// requires
var express = require('express');
var path = require('path');
var app = express();
var twilio = require('twilio');

// twilio info
var accountSid = 'ACee1e1ee9a4265df58db4d0bb6a1c2f0d';
var authToken = '7607abe91b1d0e3c38a9ac788d379d7f';


app.use(express.static('public'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3004, function() {
  console.log('up 3004');
});

app.post('/test', function (req, res) {

  var client = new twilio(accountSid, authToken);

  client.messages.create({
      body: 'Hello from Node and I',
      to: '+6127566053',  // Text this number
      from: '+7634474833' // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
});
