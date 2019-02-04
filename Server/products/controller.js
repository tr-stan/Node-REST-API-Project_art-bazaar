// Products Controller
const express = require('express')
const { Client } = require('pg')
let router = express.Router()

// set up the PG module
const connectionString = 'postgresql://tristanbennett:@localhost:5432/art-bazaar'

// instantiate new client
const client = new Client({ connectionString })

client.connect()
	.then(() => { console.log(`Connection to controller pg client successful!`)})
	.catch(error => { console.log('Sorry it seems we are experiencing some issues. Please try again.')})


// Read/Get all products
router.get('/', (request, response) => {
	client.query("SELECT Products.name, Products.category, Products.is_print, Products.price, Products.description, Users.username FROM Products, Users WHERE Products.artist = Users.id")
		.then( result => response.send(result.rows.map(item => item.name)))
		.catch( error => {
			console.log(error)
			response.send("OOPS! AN ERROR OCCURED.", error.name, error)
		})
})

// // Read/Get one product
// router.get('/:id', (request, response) => {
// 	let index = request.params.id
// 	client.query('SELECT NOW()')
// 		.then( result => response.send(result.rows[0]))
// 		.catch( error => {
// 			console.log(error)
// 			response.send("OOPS! AN ERROR OCCURED.")
// 		})
// })

// Create one product

router.post('/', (request, response) => {
	const text = 'INSERT INTO Products(name, artist, category, is_print, price, description) VALUES($1, $2, $3, $4, $5, $6) RETURNING *'
	let values = request.body.data
	client.query(text, values)
		.then( result => response.send(result.rows[0]))
		.catch( error => {
			console.log(error)
			response.send("OOPS! AN ERROR OCCURED.")
		})
})

// // Update one products
// router.put('/:id', (request, response) => {
// 	let index = request.params.id
// 	client.query('SELECT NOW()')
// 		.then( result => response.send(result.rows[0]))
// 		.catch( error => {
// 			console.log(error)
// 			response.send("OOPS! AN ERROR OCCURED.")
// 		})
// })

// // Delete < unsure what to do
// router.get('/', (request, response) => {
// 	let index = request.params.id
// 	client.query('SELECT NOW()')
// 		.then( result => response.send(result.rows[0]))
// 		.catch( error => {
// 			console.log(error)
// 			response.send("OOPS! AN ERROR OCCURED.")
// 		})
// })

module.exports = router