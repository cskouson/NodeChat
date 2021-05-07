var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.set('Cache-control', 'no-store')
  res.render('index');
});

module.exports = router;
