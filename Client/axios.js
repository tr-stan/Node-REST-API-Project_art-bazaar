const axios = require('axios')


// ======>PRODUCT REQUESTS<======


// Create: Post a product
// axios
// 	.post('http://localhost:9000/products', {
// 		name: 'Help!',
// 		artist: 'trbenny',
// 		category: 'Painting',
// 		is_print: true,
// 		price: 800.00,
// 		description: 'A crazy coool cubist portrait'
// 	})
	// .then(response => console.log("New Product: ", response.data.rows))
	// .catch(error => console.log("Post error occured", error.name, error))

// Alternate Post method:
// axios({
//         method: 'post',
//         url: 'http://localhost:9000/products',
//         data: {
//             name: 'Man With Clarinet',
//             artist: 1,
//             category: 'Sculpture',
//             is_print: false,
//             price: 100000.00,
//             description: 'An outstanding cubist sculpture.'
//         }
//     })

// Read: Get all products
// axios
//     .get("http://localhost:9000/products")
//     .then(response => console.log(response.data.map(item => item)))
//     .catch(error => console.log("Get error occured", error.name, error))

// Read: Get by id
axios
	.get("http://localhost:9000/products/2")
	.then(response => console.log("Product Search Results: ", response.data.rows))
    .catch(error => console.log("Get error occured", error.name, error))


// Update: Put a product by id
// axios
// 	.put('http://localhost:9000/products/6', {
// 		name: 'Seated Woman',
// 		artist: 1,
// 		category: 'Painting',
// 		is_print: true,
// 		price: 2000.00,
// 		description: 'An illustrious portrait'
// 	})
// 	.then(response => console.log("Updated Product: ", response.data.rows))
// 	.catch(error => console.log("Post error occured", error.name, error))


// // Destroy: Delete product by id
// axios
// 	.delete('http://localhost:9000/products/3')
// 	.then(response => console.log("Deleted Product: ", response.data.rows))
// 	.catch(error => console.log("Post error occured", error.name, error))


// ======>USER REQUESTS<======


// Create: Post a User
// axios
//     .post('http://localhost:9000/users', {
//         username: 'tritbene',
//         is_customer: true,
//         is_artist: true,
//         bio: 'Also known as Tristan',
//         first_name: 'Trit',
//         last_name: 'Bené',
//         email: 'tritbene@artsea.com',
//         password: 'tr!tben3'
//     })
    // .then(response => console.log("New User Info: ", response.data.rows))
    // .catch(error => console.log("Post error occured", error.name, error))

// Read: Get All Users
	// axios
	// 	.get("http://localhost:9000/users")
	// 	.then(response => console.log(response.data.map(item => item)))
	// 	.catch(error => console.log("Get error occured", error.name, error))

// Read: Get Users by id
	// axios
	// 	.get("http://localhost:9000/users/2")
	// 	.then(response => console.log("User Search Results: ", response.data.rows))
	// 	.catch(error => console.log("Get error occured", error.name, error))
		
// Update: Put a User by id

// Destroy: Delete User by id
	// axios
	// 	.delete('http://localhost:9000/users/11')
	// 	.then(response => console.log("Deleted User: ", response.data.rows))
	// 	.catch(error => console.log("Delete error occured", error.name, error))