window.onload = function(){
    var income_btn = document.getElementById("id_income_tab");
    var balance_btn = document.getElementById("id_balance_sheet_tab");
    var cashflow_btn = document.getElementById("id_cashflow_tab");

    var inc_statement = document.getElementById("id_income_statement");
    var bal_statement = document.getElementById("id_balance_statement");
    var cf_statement = document.getElementById("id_cashflow_statement");

    income_btn.onclick = function(){
        console.log("AAAAAAA");
        inc_statement.style.display = "block";
        bal_statement.style.display = "none";
        cf_statement.style.display = "none";
    }

    balance_btn.onclick = function(){
        inc_statement.style.display = "none";
        bal_statement.style.display = "block";
        cf_statement.style.display = "none";
    }

    cashflow_btn.onclick = function(){
        inc_statement.style.display = "none";
        bal_statement.style.display = "none";
        cf_statement.style.display = "block";
    }
}