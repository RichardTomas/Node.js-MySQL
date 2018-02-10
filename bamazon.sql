DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT (4) PRIMARY KEY,
  product_name VARCHAR(50) NULL,
  department_name VARCHAR(30) NULL,
  price DECIMAL (10,2) NULL,
  stock_quantity INT NULL  
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("8902", "An Incomplete Education", "Books", 16.99, 167);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("3204", "Jenga Classic Game", "Toys & Games", 10.27, 106);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("5234", "Dunkin Donuts K-Cup Pods, 44 Cups", "Beverages", 18.13, 209);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("3289", "Carhartt Men's Odessa Cap", "Hats", 14.99, 16);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("4430", "Wiz Gear Car Mount", "Cell Accessories", 9.99, 47);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("2901", "Armor All Car Vacuum", "Car Accessories", 10.11, 18);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("1451", "JanSport Backpack", "Bags", 23.55, 27);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("7885", "Head & Shoulders Shampoo", "Hair Care", 6.78, 39);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("5686", "Cottonelle Paper Toilet", "Household", 9.09, 15);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("4330", "Knorr Cube Bouillon", "Food", 0.93, 56);