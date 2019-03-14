var mySQL = require("mysql");
var inquirer = require("inquirer");
var keys = require("./keys");
require("console.table");

var connection = mySQL.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "34XYkf*5",
    database: "bamazonCustomer_DB"


});

connection.connect(function (err) {
    if (err) throw err.stack;
    displayItems();
    //runSearch();
});


function displayItems() {

    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.table(res);

        //run the prompt to ask what the customer wants from the items DB
        askForItem(res);
    });
}

//Asks customer for the Product ID
function askForItem(inventory) {
    inquirer
        .prompt([
            {
                type: "input",
                name: "choice",
                message: "Please select the item ID of the product you want"

            }
        ]).then(function(val){
            var userChoice = parseInt(val.choice);
            var product = checkInventory(userChoice, inventory);
            //if the product returns an item pass it in the quanity 
            if(product){
                askUserForQualtiy(product);
            }
            else{
                console.log("/nItem doesn't exist in the inventory")
                displayItems();
            }
        })

};
function askUserForQualtiy(product){
    inquirer
        .prompt([
            {
                type: "input",
                name: "quantity",
                message: "how many would you like to purchase?"
            }
        ])
        .then(function(val){
            var quantity = parseInt(val.quantity);

            if (quantity > product.Stock_Quantity){
                console.log("/nNot enough in stock.");
                displayItems();
            }
            else{
                buyItem(product, quantity)
            }
        });
}

function buyItem(product, quantity){
    connection.query(
    "UPDATE products SET Stock_Quantity = Stock_Quantity - ?, Product_sales = Product_sales + ? WHERE id = ?",
    [quantity, product.Price * quantity, product.id ],
    function(err, res){
        console.log("\nYou Purchased " + quantity + " " + product.Product_Name + "'s");
        displayItems();
    }
    )
}
function checkInventory(userChoice, inventory){
        for(var i = 0; i < inventory.length; i++){
            if(inventory[i].id === userChoice){
                return inventory[i];
            }
        }
        return null;
};
 