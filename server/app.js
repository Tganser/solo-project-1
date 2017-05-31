// requires
var express = require('express');
var path = require('path');
var app = express();
var twilio = require('twilio');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var passport = require('./strategies/user.strategy');
var session = require('express-session');

// Route includes
var index = require('./routes/index');
var user = require('./routes/user');
var register = require('./routes/register');

// twilio info
var accountSid = 'ACee1e1ee9a4265df58db4d0bb6a1c2f0d';
var authToken = '7607abe91b1d0e3c38a9ac788d379d7f';

// app uses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, './public')));


// Passport Session Configuration //
app.use(session({
   secret: 'secret',
   key: 'user', // this is the name of the req.variable. 'user' is convention, but not required
   resave: 'true',
   saveUninitialized: false,
   cookie: { maxage: 60000, secure: false }
}));

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/register', register);
app.use('/user', user);
app.use('/*', index);

// Mongo Connection //
var mongoURI = '';
// process.env.MONGODB_URI will only be defined if you
// are running on Heroku
if(process.env.MONGODB_URI != undefined) {
    // use the string value of the environment variable
    mongoURI = process.env.MONGODB_URI;
} else {
    // use the local database server
    mongoURI = 'mongodb://localhost:27017/solo';
}

// var mongoURI = "mongodb://localhost:27017/passport";
var mongoDB = mongoose.connect(mongoURI).connection;

mongoDB.on('error', function(err){
   if(err) {
     console.log("MONGO ERROR: ", err);
   }
   res.sendStatus(500);
});

mongoDB.once('open', function(){
   console.log("Connected to Mongo, meow!");
});


// App Set //
app.set('port', (process.env.PORT || 5000));

// Listen //
app.listen(app.get("port"), function(){
   console.log("Listening on port: " + app.get("port"));
});

// app.post('/test', function (req, res) {
//
//   var client = new twilio(accountSid, authToken);
//
//   client.messages.create({
//       body: 'Hello from Node and I',
//       to: '+6127566053',  // Text this number
//       from: '+7634474833' // From a valid Twilio number
//   })
//   .then((message) => console.log(message.sid));
// });
