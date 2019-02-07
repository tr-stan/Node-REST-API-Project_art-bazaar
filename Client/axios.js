const axios = require('axios')


// ======>PRODUCT REQUESTS<======


// Create: Post a product
// axios
// 	.post('http://localhost:9000/products', {
// 		name: 'Head of a Boxer',
// 		artist: 1,
// 		category: 'Painting',
// 		is_print: true,
// 		price: 800.00,
// 		description: 'A crazy coool cubist sculpture-painting'
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


// // Destroy: Delete product by id
// axios
// 	.delete('http://localhost:9000/products/3')
// 	.then(response => console.log(`Deleted Product: ${response.data}`))
// 	.catch(error => console.log("Post error occured", error.name, error))


// ======>PRODUCT REQUESTS<======


// Create: Post a User
axios
    .post('http://localhost:9000/users', {
        username: 'trbenny',
        is_customer: true,
        is_artist: true,
        bio: 'Also known as Ms. Jaqueline Chan',
        first_name: 'Jaqcui',
        last_name: 'Chan',
        email: 'jacquichan@artsea.com',
        password: '08nine80'
    })
    .then(response => console.log(`New User Info: ${response.data}`))
    .catch(error => console.log("Post error occured", error.name, error))

// Read: Get All Users

// Read: Get Users by id

// Update: Put a User

// Destroy: Delete User by id
// axios
// 	.delete('http://localhost:9000/users/11')
// 	.then(response => console.log(`Deleted User: ${response.data}`))
// 	.catch(error => console.log("Delete error occured", error.name, error))