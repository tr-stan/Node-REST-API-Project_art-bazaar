# Node-REST-API-Project_art-bazaar
A REST API for a marketplace app where users can buy either the original or a print of a piece of art

## Purpose:
The purpose of this app is to demonstrate competency with building SQL databases that utilize all types of relationships:

- One-to-one
- One-to-many
- Many-to-many

This app will be composed of pieces of art (products) that are for sale, and users who can buy art (is_customer: true) and/or sell art(is_artist: true). Each piece of art will have one original (is_print: false), and numerous prints (is_print: true) for sale. Users can purchase the one original at a higher price than the prints, if it hasn't already been sold. The originals will cost more than the prints.

## How this uses the SQL relationships and satisfies the goal of this project:

- One-to-one: Each item has only one original
- One-to-many: Each item has many prints
- Many-to-many: A user can purchase multiple items, and multiple users can purchase a print of the same item

## API Endpoints

All endpoints are only accessible via http (not https). I used axios to mimic client-side requests, so all of my example code will be using axios as well.

The root URL is: `http://localhost:9000`

There are two main paths through which you can submit CRUD operations: User requests and Product requests.

### User Requests

Path
	: `/users`
	- POST: Create User
		- Parameters:
			- username: [string],
	        - is_customer: [boolean],
	        - is_artist: [boolean],
	        - bio: [string],
	        - first_name: [string],
	        - last_name: [string],
	        - email: [string],
	        - password: [string]
	    - Example:
	    	```
		    axios
			    .post('http://localhost:9000/users', {
			        username: 'tritbene',
			        is_customer: true,
			        is_artist: true,
			        bio: 'Also known as Tristan',
			        first_name: 'Trit',
			        last_name: 'Bené',
			        email: 'tritbene@artsea.com',
			        password: 'tr!tben3'
		    })
		    .then(response => console.log("New User Info: ", response.data.rows))
		    .catch(error => console.log("User post error occured", error.name, error))
		    ```
		 - Response: Array of data (inserted into Users table and Users_Private table)
		 	```
			[ 'tritbene', true, true, 'Also known as Tristan' ]
			[ 'tritbene', 'Trit', 'Bené', 'tritbene@artsea.com', 'tr!tben3' ]
			```
	- GET: Find All Users
	    - Example:
	    	```
	    	axios
				.get("http://localhost:9000/users")
				.then(response => console.log(response.data.map(item => item)))
				.catch(error => console.log("Get error occured", error.name, error))
		    ```
		 - Response: Array of User objects
		 	```
			[ { username: 'henri', is_customer: false, is_artist: true },
			  { username: 'trbenn', is_customer: true, is_artist: true },
			  { username: 'aluko', is_customer: true, is_artist: false },
			  { username: 'leidich', is_customer: true, is_artist: false },
			  { username: 'schex', is_customer: true, is_artist: false },
			  { username: 'lane', is_customer: true, is_artist: false },
			  { username: 'alfie', is_customer: false, is_artist: true },
			  { username: 'trbenny', is_customer: true, is_artist: true },
			  { username: 'tritbene', is_customer: true, is_artist: true } ]
			```
Path
	: `/users/:id`
	- GET: Find User by ID
	- PUT: Update User by ID
	- DELETE: Delete User by ID
		 	

### Product Requests

Path
	: `/products`
	- POST: Create a Product
		- Parameters:
			- name: [string]
			- artist: [string], not null
				- references user, so you should enter the username of the artist
			- is_artist: [boolean], not null
			- bio: [string],
			- first_name: [string], not null
			- last_name: [string], not null
			- email: [string], not null
			- password: [string], not null
		- Example:
			```
			axios
			.post('http://localhost:9000/products', {
				name: 'Help!',
				artist: 'trbenny',
				category: 'Painting',
				is_print: true,
				price: 800.00,
				description: 'A crazy coool cubist portrait'
			})
			.then(response => console.log("New Product Info: ", response.data.rows))
			.catch(error => console.log("Product Post error occured", error.name, error))
		    ```
	    - Response: Array of data (inserted into Products table)
			```
		 	[ 'Help!',
  			'trbenny',
  			'Painting',
  			true,
  			800,
  			'A crazy coool cubist portrait' ]
  			```
  	- GET: Find All Products
  		- Example:
  			```
  			axios
    			.get("http://localhost:9000/products")
    			.then(response => console.log(response.data.map(item => item)))
    			.catch(error => console.log("Get error occured", error.name, error))
  			```
  		- Response: Array of Product Objects
  			```
			[ { username: 'henri', is_customer: false, is_artist: true },
			  { username: 'trbenn', is_customer: true, is_artist: true },
			  { username: 'aluko', is_customer: true, is_artist: false },
			  { username: 'leidich', is_customer: true, is_artist: false },
			  { username: 'schex', is_customer: true, is_artist: false },
			  { username: 'lane', is_customer: true, is_artist: false },
			  { username: 'alfie', is_customer: false, is_artist: true },
			  { username: 'trbenny', is_customer: true, is_artist: true },
			  { username: 'tritbene', is_customer: true, is_artist: true } ]
  			```
 Path
	: `/products/:id`
	- GET: Find Product by ID
	- PUT: Update Product by ID
	- DELETE: Delete Product by ID




