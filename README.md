# Node-REST-API-Project_art-bazaar
A marketplace app where users can buy either the original or a print of a piece of art

## Purpose:
The purpose of this app is to demonstrate competency with building SQL databases that utilize all types of relationships:
- One-to-one
- One-to-many
- Many-to-many

This app will be composed of pieces of art (products) that are for sale. Each piece of art will have one original, and numerous prints (copies) for sale. Users can purchase the one original, if it hasn't already been sold. The originals will cost more than the prints.

## How this uses the SQL relationships and satisfies the goal of this project:

- One-to-one: Each item has only one original
- One-to-many: Each item has many prints
- Many-to-many: A user can purchase multiple items, and multiple users can purchase a print of the same item

## Tables:

### Customers
- id INT NOT NULL
- username VARCHAR(25) NOT NULL
- first_name VARCHAR(255) NOT NULL
- last_name VARCHAR(255) NOT NULL
- PRIMARY KEY (id)

### Customers_Private
- id INT NOT NULL
- email VARCHAR(255) NOT NULL
- password VARCHAR(255) NOT NULL
- FOREIGN KEY (id) REFERENCES Customers(id)

### Artists
- id INT NOT NULL
- name NOT NULL

### Products
- id INT NOT NULL
- name VARCHAR(255) NOT NULL
- category VARCHAR(50) NOT NULL
- is_print BOOLEAN NOT NULL <!-- FALSE=original TRUE=print -->
- price FLOAT NOT NULL
- description VARCHAR(255) NOT NULL
- PRIMARY KEY (id)

### Order_Details
- id INT NOT NULL
- user_id VARCHAR(50) NOT NULL
- subtotal FLOAT NOT NULL
- PRIMARY KEY (id)


### Shopping_Cart
- product_id INT NOT NULL
- product_name VARCHAR(255) NOT NULL
- product_quantity INT NOT NULL

### Purchase_History
- purchase_id INT NOT NULL
- purchase_date
- product_id
- name
- price
- quantity
- PRIMARY KEY (purchase_id)
- FOREIGN KEY (product_id) REFERENCES Shopping_Cart(product_id)
- FOREIGN KEY (name) REFERENCES Shopping_Cart(product_name)
- FOREIGN KEY (price) REFERENCES Shoping_Cart(product_price)
- FOREIGN KEY (quantity) REFERENCES Shopping_Cart(product_quantity)


