'use strict'

var express = require('express');
var router = express.Router();
var controller = './opentok.js';

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var OpenTok = require('opentok'),
    opentok = new OpenTok(45232972, '328a1cbe87d9bbf7f72d11ee339f2d627f3fedf3');


router.get('/', function(req, res, next) {
	console.log('HELLO WORLD');
	opentok.createSession(null, function(err, result) {
		if (err) next(err);
		console.log('createdNewSession');
		console.log(result);
		console.log(err);
		if(err) console.log(err);
	    sessionId = result;
	    res.json(sessionId);
	})	
});

//opentok.generateToken(sessionID, {'role:publisher'});

module.exports = router;