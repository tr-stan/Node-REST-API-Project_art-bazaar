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
		- username: 'string',
        - is_customer: boolean,
        - is_artist: boolean,
        - bio: 'string',
        - first_name: 'string',
        - last_name: 'string',
        - email: 'string',
        - password: 'string'
    - Example:
    	```
    	// POST: add new user
	    axios
	    .post('http://localhost:9000/users', {
	        username: 'user',
	        is_customer: true,
	        is_artist: false,
	        bio: '',
	        first_name: 'Nu',
	        last_name: 'Youser',
	        email: 'newyouser@artbazaar.com',
	        password: '90n!ne'
	    })
	    .then(response => console.log(`New User Info: ${response.data}`))
	    .catch(error => console.log("Post error occured", error.name, error))
	    ```


### Product Requests

Path
	: `/products`
- POST: Create Product
	- 




