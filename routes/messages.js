var express = require('express');
var router = express.Router();
var Message = require('../models/message');
var jwt = require('jsonwebtoken');

router.get('/', function (req, res, next) { // route '/' is /messages in this context
    Message.find()
        .exec(function (err, messages) {
            if (err) {
                return res.status(500).json({ // exit if error
                    title: 'An error occured',
                    error: err
                });
            }
            res.status(200).json({ // if no err, return messages
                message: 'Success',
                obj: messages
            });
        });
});

router.use('/', function (req, res, next) { // will be used on every request except .get('/')
    jwt.verify(req.query.token, 'secret', function(err, decoded){ // gives access to all query params, checks for token in params
        if (err) {
            return res.status(401).json({ // not authorized
                title: 'Authentication failed',
                error: err
            });
        }
        next(); // let request continue if no err
    });
});

router.post('/', function (req, res, next) { // this remains as '/' because we only go here if it begins with /messages
    var message = new Message({
        content: req.body.content
    });
    message.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        res.status(201).json({
            message: 'Message saved',
            obj: result
        })
    });
});

router.patch('/:id', function (req, res, next) {
    Message.findById(req.params.id, function (err, message) {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        if (!message) {
            return res.status(500).json({
                title: 'Message not found!',
                error: {message: 'Message not found!'}
            });
        }
        message.content = req.body.content;
        message.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'Message not found!',
                    error: err
                });
            }
            res.status(200).json({ // if no err, return messages
                message: 'Updated message',
                obj: result
            });
        });
    });
});

router.delete('/:id', function (req, res, next) {
    Message.findById(req.params.id, function (err, message) {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        if (!message) {
            return res.status(500).json({
                title: 'Message not found!',
                error: {message: 'Message not found!'}
            });
        }
        message.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'Message not found!',
                    error: err
                });
            }
            res.status(200).json({ // if no err, return messages
                message: 'Deleted message',
                obj: result
            });
        });
    });
});

module.exports = router;
