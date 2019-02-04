// Users Controller
const express = require('express')
const { Client } = require('pg')
let router = express.Router()

// set up the PG module
const connectionString = 'postgresql://tristanbennett:@localhost:5432/art-bazaar'

// instantiate new client
const client = new Client({ connectionString })

// Create One
router.post('/:id', (request, response) => {
	let index = request.params.id
	client.query('SELECT NOW()')
		.then( result => response.send(result.rows[0]))
		.catch( error => {
			console.log(error)
			response.send("OOPS! AN ERROR OCCURED.")
		})
})

// Read All
router.get('/', (request, response) => {
	client.query('SELECT NOW()')
		.then( result => response.send(result.rows[0]))
		.catch( error => {
			console.log(error)
			response.send("OOPS! AN ERROR OCCURED.")
		})
})

// Read One
router.get('/:id', (request, response) => {
	let index = request.params.id
	client.query('SELECT NOW()')
		.then( result => response.send(result.rows[0]))
		.catch( error => {
			console.log(error)
			response.send("OOPS! AN ERROR OCCURED.")
		})
})

// Update
router.put('/:id', (request, response) => {
	let index = request.params.id
	client.query('SELECT NOW()')
		.then( result => response.send(result.rows[0]))
		.catch( error => {
			console.log(error)
			response.send("OOPS! AN ERROR OCCURED.")
		})
})

// Delete < unsure what to do
router.get('/', (request, response) => {
	let index = request.params.id
	client.query('SELECT NOW()')
		.then( result => response.send(result.rows[0]))
		.catch( error => {
			console.log(error)
			response.send("OOPS! AN ERROR OCCURED.")
		})
})

module.exports = router