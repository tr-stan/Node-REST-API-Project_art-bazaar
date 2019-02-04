-- CREATE TABLE Users (
-- id SERIAL NOT NULL,
-- username VARCHAR(25) NOT NULL,
-- is_customer BOOLEAN NOT NULL,
-- is_artist BOOLEAN NOT NULL,
-- img_url VARCHAR(255),
-- bio VARCHAR(255),
-- created_at TIMESTAMP DEFAULT NOW(),
-- PRIMARY KEY (id)
-- )

-- CREATE TABLE Users_Private (
-- id SERIAL NOT NULL,
-- public_id INT NOT NULL,
-- first_name VARCHAR(255) NOT NULL,
-- last_name VARCHAR(255) NOT NULL,
-- email VARCHAR(255) NOT NULL,
-- password VARCHAR(255) NOT NULL,
-- PRIMARY KEY (id),
-- FOREIGN KEY (public_id) REFERENCES Users(id)
-- )

-- CREATE TABLE Products (
-- id SERIAL NOT NULL,
-- name VARCHAR(255) NOT NULL,
-- artist INT NOT NULL,
-- category VARCHAR(50) NOT NULL,
-- is_print BOOLEAN NOT NULL,
-- price MONEY NOT NULL,
-- description VARCHAR(255) NOT NULL,
-- created_at TIMESTAMP DEFAULT NOW(),
-- PRIMARY KEY (id),
-- FOREIGN KEY (artist) REFERENCES Users(id)
-- )

-- CREATE TABLE Cart (
-- id SERIAL NOT NULL,
-- user_id INT NOT NULL,
-- product_id INT NOT NULL,
-- product_quantity INT NOT NULL,
-- created_at TIMESTAMP DEFAULT NOW(),
-- PRIMARY KEY (id),
-- FOREIGN KEY (user_id) REFERENCES Users(id),
-- FOREIGN KEY (product_id) REFERENCES Products(id)
-- )

-- tables below have not been added yet

-- CREATE TABLE Order_Details (
-- id INT NOT NULL,
-- user_id INT NOT NULL,
-- product_id INT NOT NULL, 
-- product_price MONEY NOT NULL,
-- product_quantity INT NOT NULL,
-- created_at TIMESTAMP DEFAULT NOW(),
-- PRIMARY KEY (id),
-- FOREIGN KEY (user_id),
-- FOREIGN KEY (product_id)
-- )

-- CREATE TABLE Purchase_History (
-- user_id INT NOT NULL
-- purchase_id INT NOT NULL,
-- product_id INT NOT NULL,
-- product_name VARCHAR(255) NOT NULL,
-- price MONEY NOT NULL,
-- discount MONEY NOT NULL,
-- quantity INT NOT NULL,
-- purchased_at TIMESTAMP DEFAULT NOW(),
-- PRIMARY KEY (purchase_id),
-- FOREIGN KEY (product_id) REFERENCES Order_Details(id),
-- FOREIGN KEY (name) REFERENCES Order_Details(product_name),
-- FOREIGN KEY (price) REFERENCES Order_Details(product_price),
-- FOREIGN KEY (quantity) REFERENCES Order_Details(product_quantity)
-- )




