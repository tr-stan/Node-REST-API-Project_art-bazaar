const axios = require('axios')

// Create: Post a product
// axios
// 	.post('http://localhost:9000/products', {
// 		name: 'Head of a Young Girl',
// 		artist: 1,
// 		category: 'Sculpture',
// 		is_print: false,
// 		price: 100000.00,
// 		description: 'A marvelous cubist sculpture'
// 	})
// 	.then(response => console.log(`New Product: ${response.data}`))
// 	.catch(error => console.log("Post error occured", error.name, error))

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
//     .then(response => console.log(`Search Results: ${response.data}`))
//     .catch(error => console.log("Get error occured", error.name, error))

// Read: Get by id


// Update: Put a product
// axios
// 	.put('http://localhost:9000/products/6', {
// 		name: 'Seated Woman',
// 		artist: 1,
// 		category: 'Painting',
// 		is_print: true,
// 		price: 2000.00,
// 		description: 'An illustrious portrait'
// 	})
	// .then(response => console.log(`Updated Product: ${response.data}`))
	// .catch(error => console.log("Post error occured", error.name, error))

// Alternate Put method:
// axios({
// 	method: 'put',
// 	url: 'http://localhost:9000/products/4',
// 	data: {
// 		name: 'Head of a Young Girl',
// 		artist: 1,
// 		category: 'Sculpture',
// 		is_print: false,
// 		price: 200000.00,
// 		description: 'A marvelous cubist sculpture.'
// 	}
// })

// Destroy: Delete by id
axios
	.delete('http://localhost:9000/products/3')
	.then(response => console.log(`Deleted Product: ${response.data}`))
	.catch(error => console.log("Post error occured", error.name, error))







