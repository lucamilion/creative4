var request = require('request');
var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('index.html', { root: 'public' });
});


router.get('/advice', function(req, res) {
    var adviceBase = "http://api.adviceslip.com/advice"
    request(adviceBase).pipe(res);
});

router.post('/goodadvice', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    console.log("In Pokemon Post");
    console.log(req.body);
    goodadvice.push(req.body);
    res.end('{"success" : "Updated Successfully", "status" : 200}');
});

router.get('/goodadvice', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    console.log("In goodadvice");
    console.log(goodadvice);
    res.send(goodadvice);
});

var goodadvice = [];
module.exports = router;
