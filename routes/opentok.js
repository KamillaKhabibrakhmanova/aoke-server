'use strict'

var express = require('express');
var router = express.Router();
var controller = './opentok.js';
var OpenTok = require('opentok');
var opentok = new OpenTok(45232972, '328a1cbe87d9bbf7f72d11ee339f2d627f3fedf3');

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', function(req, res, next) {
	opentok.createSession({mediaMode:"routed"}, function(err, result) {
		if(err) console.log(err);
	    res.json(result.sessionId);
	})	
});

router.get('/publisher/:sessionId', function(req, res) {
	var token = opentok.generateToken(req.params.sessionId, {'role': 'publisher'});
	res.send(token);
})

router.get('/:sessionId', function(req, res) {
	var token = opentok.generateToken(req.params.sessionId, {'role': 'subscriber'});
	res.send(token);
})

//opentok.generateToken(sessionID, {'role:publisher'});

module.exports = router;