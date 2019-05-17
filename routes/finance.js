var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function(req, res){
    var sym = req.query.symbol;

    if(!sym)
    {
        res.render('finance');
    }
    else
    {
        var url = 'https://financialmodelingprep.com/api/v2/financials/income-statement/' + sym + '?datatype=json';
        request.get(url, function(error, response, body){
            var income_data = JSON.parse(body).financials.pop();
            console.log(income_data);

            if(income_data)
            {
                res.render('finance', {income_statement: income_data});
            }
            else
            {
                res.render('finance');
            }
        });
    }
});

module.exports = router;