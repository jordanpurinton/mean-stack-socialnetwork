var express = require('express');
var router = express.Router();
var Message = require('../models/message');

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

module.exports = router;
