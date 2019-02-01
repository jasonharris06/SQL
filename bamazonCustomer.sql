DROP DATABASE IF EXISTS bamazonCustomer_DB;
CREATE DATABASE bamazonCustomer_DB;
USE bamazonCustomer_DB;

CREATE TABLE products(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  Product_Name VARCHAR(100) NULL,
  Department_Name VARCHAR(100) NULL,
  Price FLOAT(11) NULL,
  Stock_Quantity INTEGER(10) NULL,
  PRIMARY KEY (id)
);

INSERT INTO products(Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Sony OLED TV","Electronics",3200,2);

INSERT INTO products(Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Bowers and Wilkes Center Speaker","Electronics",1200,4);

INSERT INTO products(Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Nintendo Switch Super Smash Brawl Bundle","Video Games",359.99,6);

INSERT INTO products(Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Kingdom Hearts III","Video Games",79.99,18);

INSERT INTO products(Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Nintendo Pro Remote","Video Games",69.99,1);

INSERT INTO products(Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Breville Coffee Maker","Small Appliances",349.99,1);

INSERT INTO products(Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Dyson Pet Control Vacuum","Small Appliances",599.99,2);

INSERT INTO products(Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Ninja Food Processor","Small Appliances",149.99,6);

INSERT INTO products(Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Rocket 6 foot HDMI cable","Electronics",49.99,25);

INSERT INTO products(Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Kicker 12 inch Subwoofer","Car Audio",199.99,13);

INSERT INTO products(Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Sony stereo","Car Audio",149.99,2);




