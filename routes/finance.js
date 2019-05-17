var express = require('express');
var router = express.Router();

router.all('/', function(req, res, next){
    res.render('finance');
});

router.post('/finance', function(req, res, next)){
    
}

module.exports = router;