var express = require('express');
var router = express.Router();
var tutors = require('../tutors');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('./public/index.html');
});

module.exports = router;
