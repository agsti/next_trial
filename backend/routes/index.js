var express = require('express');
var router = express.Router();

var model = require('../model')
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send("OK")
});

module.exports = router;
