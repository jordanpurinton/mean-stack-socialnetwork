// Sent from server to client

var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
    User.findOne({}, function(err, doc) {
      if(err) {
          return res.send('Error!');
      }
      res.render('node', {email: doc.email});
    });
    // all code outside of the callback won't have data
});

router.post('/', function (req, res, next) {
   var email = req.body.email;
   var user = new User({
       firstName: 'Jordan',
       lastName: 'Purinton',
       password: 'topsecret',
       email: email
   });
   user.save(); // store user object in users collection
   res.redirect('/');
});

module.exports = router;
