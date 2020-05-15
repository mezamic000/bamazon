var mysql = require("mysql");

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
		connection.end();
	});
}
