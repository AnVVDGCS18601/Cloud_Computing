var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.writeHead(200);
  res.end("<h1>This is home page</h1>");
});

module.exports = router;
