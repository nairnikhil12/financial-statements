var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('finance', {symbol: req.query.symbol});
});

module.exports = router;