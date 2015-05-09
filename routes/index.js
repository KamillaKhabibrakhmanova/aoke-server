var express = require('express');
var router = express.Router();
var controller = './opentok.js';


router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/new', function(req, res) {
	res.send('HELLO WORLD');
	// var sessionId;
	// console.log('dfdfdf', req);
	// opentok.createSession(null, function(err, result) {
	// 	console.log('createdNewSession');
	// 	console.log(result);
	// 	console.log(err);
	// 	if(err) console.log(err);
	//     sessionId = result;
	//     console.log('sess id', sessionId)
	//     return res.status(200).json(sessionId);
	// })	
});

module.exports = router;
