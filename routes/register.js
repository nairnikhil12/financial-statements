var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/register', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'public/webpages/register.html'));
});

module.exports = router;
