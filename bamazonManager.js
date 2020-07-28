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
  productsList();
});

function productsList() {
  inquirer.prompt([
    {
      name: "products",
      type: "list",
      message: "Please choose from the following:",
      choices: ["View list of products for sale", "View low inventory"]
    }
  ])
    .then(function (answer) {
      if (answer.products === "View list of products for sale") {
        viewAll();
      }
      else if (answer.products === "View low inventory") {
        viewLow();
      }
    })
}

function viewAll() {
  connection.query("SELECT * FROM `products`",
    function (err, res) {
      if (err) throw err;
      console.table(res);
      connection.end();
    });
};

function viewLow() {
  connection.query("SELECT * FROM `products` WHERE `stock_quantity` < 40",
    function (err, res) {
      if (err) throw err;
      console.table(res);
      connection.end();
    });
};

