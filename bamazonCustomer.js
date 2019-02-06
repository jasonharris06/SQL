var mySQL = require("mysql");
var inquirer = require("inquirer");
var keys = require("./keys");
var consoleTable = require("console.table");

var connection = mySQL.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "34XYkf*5",
    database: "bamazonCustomer_DB"


});

connection.connect(function(err){
    if(err) throw err;
    displayItems();
    //runSearch();
});

// function runSearch() {
//     inquirer
//     .prompt({

//     })
// };

function displayItems(){
    
    connection.query("SELECT * FROM products", function(err, res) {
        console.table(res);
        // console.log("-----------------------------------");
        // console.log(res.id + " | " + res.Product_Name + " | " + res.Department_Name + " | " + res.Price + " | " + res.Stock_Quantity );
        // for (var i = 0; i < res.length; i++) {
        //   console.log(res[i].id + " | " + res[i].Product_Name + " | " + res[i].Department_Name + " | "  + res[i].Price + " | " + res[i].Stock_Quantity);
        // }
        // console.log("-----------------------------------");
      });
}