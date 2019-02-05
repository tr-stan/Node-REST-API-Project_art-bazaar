const axios = require('axios')

// Get all products
axios
    .get("http://localhost:9000/products")
    .then(response => console.log(`Here's your data: ${response}`))
    .catch(error => console.log("Error occured", error.name, error))

// Create a product
axios({
        method: 'post',
        url: 'http://localhost:9000/products',
        data: {
            name: 'Man With Clarinet',
            artist: 1,
            category: 'Sculpture',
            is_print: false,
            price: 100000.00,
            description: 'An outstanding cubist sculpture.'
        }
    })

// Update a product
axios({
	method: 'put',
	url: 'http://localhost:9000/products/4',
	data: {
		name: 'Head of a Young Girl',
		artist: 1,
		category: 'Sculpture',
		is_print: false,
		price: 200000.00,
		description: 'A marvelous cubist sculpture.'
	}
})