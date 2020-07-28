# bamazon

Hello Friend! Are you ready to checkout Bamazon? I know what you are wondering. What is Bamazon? 
Bamazon is CLI app that acts very similar to the famous Amazon. The app takes in orders from customers and depletes stock from the store's inventory. There are two view points; constomer and manager. 

To view this code in action. Please click [here.](https://youtu.be/IbGtSLfPBV4)

Customer:
In your terminal:
1. To get started, type node bamazonCustomer.js
2. A table filled with ALL the different prducts will appear. It will have the item_id, product_name, department_name, price, and       stock_quantity listed.
3. A prompt will appear asking you what product you would like to buy, enter the items id and press enter.
4. A second promp will appear, asking how much of the product you want, enter the quantity and press enter.
5. It will dosplay the old stock_quantity, new stock_quantity, price per product, and total amount.

Manager:
In your terminal:
  1. To get started, type node bamazoManager.js
  2. Two options will appear: View list of products for sale and View low inventory.
  3. Using the up and down arrow keys, select one of the options and press enter.

      View list of products for sale:
      1. A table filled with ALL the different prducts will appear. It will have the item_id, product_name, department_name, price, and stock_quantity listed.

      View low inventory:
      1. A table filled with prducts that have a stock_quantity below the specified amount will appear. It will have the item_id, product_name, department_name, price, and stock_quantity listed.

NPM packages: MySQL and Inquirer



