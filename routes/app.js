// Sent from server to client

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index'); // refers to index.hbs file
});

router.get('/message/:msg', function (req, res, next) {
    res.render('node', {message: req.params.msg}); // params refers to parameters encoded in the url
});

router.post('/message', function (req, res, next) {
   var message = req.body.message;
   res.redirect('/message/' + message); // redirect to get route, encodes message in URL
});

module.exports = router;
