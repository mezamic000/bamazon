var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazonDB",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadID + "\n");
  readProducts();
});

function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.table(res);
    start();
  });
}

function start() {
  inquirer
    .prompt([
      {
        name: "prodID",
        type: "input",
        message: "Please enter the ID of the product you would like to buy.",
      },
      {
        name: "units",
        type: "input",
        message: "How much of the product would you like to buy?",
      },
    ])
    .then(function (answer) {
      connection.query(
        "SELECT * FROM products WHERE `item_id` =?",
        answer.prodID,
        function (err, res) {
          if (err) throw err;
          if (answer.units > res[0].stock_quantity) {
            console.log(`Current stock quantity: ${res[0].stock_quantity}`);
            console.log(
              "Sorry, insufficient quantity."
            );
            newOrder();
          } else {
            var newQty = (res[0].stock_quantity - answer.units);
            console.log(`Old stock quantity: ${res[0].stock_quantity}`);
            console.log("New stock quantity:" + newQty);
            console.log("Price: $" + res[0].price)
            var total = answer.units * res[0].price;
            console.log("Total amount due: $" + total);


            connection.query("UPDATE `products` SET ? WHERE ?", [
              {
                stock_quantity: newQty
              },
              {
                item_id: answer.id
              }
            ],
              function (err, res) {
                if (err) throw err;
                console.log("Order Complete! Have a wonderful day.")
                connection.end();
              });
          }
        }
      );
    });
}

function newOrder() {
  inquirer
    .prompt({
      type: "confirm",
      message: "Would you like to try again to make a purchase?",
      name: "yes",
    })
    .then(function (answer) {
      if (answer.yes) {
        start();
      } else {
        connection.end();
      }
    });
}

