const axios = require('axios')

// Get all products
axios
    .get("http://localhost:9000/products")
    .then(response => console.log(`Here's your data: ${response}`))
    .catch(error => console.log("Error occured", error.name, error))

axios
    .post({
        method: 'post',
        url: '/',
        data: {
            name: 'Composition',
            artist: 'Henri Laurens',
            category: 'Painting',
            is_print: true,
            price: 1000.00,
            description: 'An outstanding cubist portrait.'
        }
    })