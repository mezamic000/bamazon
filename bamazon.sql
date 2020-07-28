CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(45),
    department_name VARCHAR(45),
    price INT NOT NULL,
    stock_quantity INTEGER(8) NOT NULL,
    PRIMARY KEY (item_id)
);



