var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
});

displayTable();

function displayTable() {
    console.log("\nWelcome to Bamazon!");
    console.log("\nHere is what's on sale...\n");
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        var table = new Table({
            head: ['Item ID', 'Product Name', 'Department', 'Price', 'Quantity in Stock']
        });

        for (i = 0; i < res.length; i++) {
            var tempArray = [];
            for (var key in res[i]) {
                tempArray.push(res[i][key]);
            }
            table.push(tempArray);
        }
        console.log(table.toString());
        runPurchase();
    });
};

function runPurchase() {
    inquirer.prompt([{
            type: "input",
            message: "Enter the Item ID of the product you wish to purchase:",
            name: "id",
            validate: function(value) {
                //validates answer
                if (isNaN(value) === false) {
                    return true;
                } else {
                    console.log("\nPlease enter a valid Item ID.\n");
                    return false;
                };
            }
        },
        {
            type: "number",
            message: "How many would you like to buy?",
            name: "quantity",
            validate: function(value) {
                //validates answer
                if (isNaN(value) === false) {
                    return true;
                } else {
                    console.log("\nPlease enter a valid Quantity\n");
                    return false;
                }
            }
        }
    ]).then((answer) => {
        var product = answer.id;
        var quantity = answer.quantity;
        connection.query('SELECT * FROM products WHERE ?', { item_id: product }, (err, data) => {
            if (err) throw (err);

            if (quantity <= data[0].stock_quantity) {

                console.log("\nYour Order has been processed!");
                console.log("\nYour total purchase is: $" + (quantity * data[0].price));
                console.log("\nThank you for shopping at Bamazon!\n");

                connection.query('UPDATE products SET stock_quantity= ' + (data[0].stock_quantity - quantity) + ' WHERE item_id= ' + product);

                purchaseAgain();

            } else {
                console.log("\nInsufficient quantity in stock!\n");
                purchaseAgain();
            }
        });
    });
}

function purchaseAgain() {
    inquirer.prompt([{
        type: "confirm",
        name: "promptAgain",
        message: "Would you like to make another purchase?",
        default: true
    }]).then(choice => {
        if (choice.promptAgain) {
            displayTable();

        } else {
            console.log("\nGood Bye!\n");
            connection.end();
        }
    });
}