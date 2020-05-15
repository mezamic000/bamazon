CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(45),
    department_name VARCHAR(45),
    price INT NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("t-shirt", "clothing", 25, 100), ("jeans", "clothing", 25, 100), ("lip gloss", "cosmetics", 10, 50), ("laptop", "electronics", 500, 25), ("lamp", "home", 100, 30), ("painting", "home", 50, 20), ("cookies", "food", 5, 40), ("chips", "food", 1, 100), ("vitamins", "health", 15, 60), ("tv", "electronics", 350, 30);

