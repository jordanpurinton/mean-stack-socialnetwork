// Sent from server to client

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index'); // refers to index.hbs file
});

router.get('/message', function (req, res, next) {
    res.render('node', {message: 'Hello!'});
});

module.exports = router;
