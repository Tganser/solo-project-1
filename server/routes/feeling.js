var express = require('express');
var router = express.Router();
var passport = require('passport');
var Feeling = require('../models/feeling.model');
var path = require('path');

router.post('/', function(req, res) {

    console.log('in post /journal route');
    console.log('user ->', req.user);

    req.body.user = req.session.passport.user;
    Feeling.create(new Feeling(req.body), function(err, post) {
      console.log('req.body ->', req.body);
         if(err) {
           // next() here would continue on and route to routes/index.js
            res.sendStatus(500);
         } else {
          // route a new express request for GET '/'
          console.log('success!');
          res.sendStatus(200);
         }
    });

    router.get('/', function (req, res) {
      console.log('in get feeling route');
      console.log('req.body ->', req.body);

        Feeling.find({user: req.user._id}, function(err, data){
          if(err){
            console.log(err);
            res.sendStatus(500);
          } else {
            console.log('data ->', data);
            res.send(data);
          }
        });

    });

});



module.exports = router;
