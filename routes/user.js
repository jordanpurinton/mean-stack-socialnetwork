var express = require('express');
var router = express.Router();
var secret = require('bcryptjs');
var User = require('../models/user');
var jwt = require('jsonwebtoken');

router.post('/', function (req, res, next) { // TODO integrate SSL
    var user = new User ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: secret.hashSync(req.body.password, 10),
        email: req.body.email
    });
    user.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        res.status(201).json({
            message: 'User created',
            obj: result
        })

    });
});

router.post('/signin', function(req, res, next) {
    User.findOne({email: req.body.email}, function(err, user){
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        if (!user) { // user not found
            return res.status(401).json({
                title: 'Sign in failed',
                error: {message: 'Email or password were incorrect'}
            })
        }
        if (!secret.compareSync(req.body.password, user.password)) { // password is not the same
            return res.status(401).json({
                title: 'Sign in failed',
                error: {message: 'Email or password were incorrect'}
            });
        }
        var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200}); // 7200 sec or 2 hours
        res.status(200).json({
            message: 'Login successful',
            token: token,
            userId: user._id, // will use later in front end for display purposes
            firstName: user.firstName
        });
    });
});

module.exports = router;
