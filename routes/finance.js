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
        var url_income = 'https://financialmodelingprep.com/api/v2/financials/income-statement/' + sym + '?datatype=json';
        var url_balance = 'https://financialmodelingprep.com/api/v2/financials/balance-sheet-statement/' + sym + '?datatype=json';
        var url_cashflow = 'https://financialmodelingprep.com/api/v2/financials/cash-flow-statement/' + sym + '?datatype=json';
        var income_data;
        var balance_data;
        var cash_flow;

        var promise_income = new Promise(function(resolve, reject){
            request.get(url_income, function(error, response, body){
                income_data = JSON.parse(body).financials.pop();
                resolve();
            });
        });

        var promise_balance = new Promise(function(resolve, reject){
            request.get(url_balance, function(error, response, body){
                balance_data = JSON.parse(body).financials.pop();
                resolve();
            });
        });
            
        var promise_cashflow = new Promise(function(resolve, reject){
            request.get(url_cashflow, function(error, response, body){
                resolve();
                cash_flow = JSON.parse(body).financials.pop();
            });
        });

        Promise.all([promise_income, promise_balance, promise_cashflow]).then(function(){
            console.log(balance_data);
            res.render('finance', {income_statement: income_data, balance_statement: balance_data, cashflow_statement: cash_flow});
        });
    }
});

module.exports = router;