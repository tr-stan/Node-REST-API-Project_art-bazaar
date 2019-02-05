// Products Controller
const express = require('express')
const bodyParser = require('body-parser')
const { Client } = require('pg')

let router = express.Router()

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

// set up the PG module
const connectionString = 'postgresql://tristanbennett:@localhost:5432/art-bazaar'

// instantiate new client
const client = new Client({ connectionString })

client.connect()
    .then(() => { console.log(`Connection to controller pg client successful!`) })
    .catch(error => { console.log('Sorry it seems we are experiencing some issues. Please try again.') })


// Read/Get all products
router.get('/', (request, response) => {
    client.query("SELECT Products.name, Products.category, Products.is_print, Products.price, Products.description, Users.username FROM Products, Users WHERE Products.artist = Users.id")
        .then(result => response.send(result.rows.map(item => item)))
        .catch(error => {
            console.log(error)
            response.send("OOPS! AN ERROR OCCURED.", error.name, error)
        })
})

// Read/Get one product
router.get('/:id', (request, response) => {
    let index = request.params.id
    client.query(`SELECT Products.name, Products.category, Products.is_print, Products.price, Products.description, Users.username FROM Products, Users WHERE Products.artist = Users.id AND Products.id = ${index}`)
        .then(result => response.send(result.rows[0]))
        .catch(error => {
            response.send("OOPS! AN ERROR OCCURED.", error.name, error)
        })
})

// Create one product

router.post('/', (request, response) => {
    let text = 'INSERT INTO Products(name, artist, category, is_print, price, description) VALUES($1, $2, $3, $4, $5, $6)'

    let values = [request.body.name, request.body.artist, request.body.category, request.body.is_print, request.body.price, request.body.description]
    console.log(values)
    client.query(text, values)
        .then(result => response.send(result))
        .catch(error => {
            console.log(error)
            response.send("OOPS! AN ERROR OCCURED.")
        })

})

// Update one products
router.put('/:id', (request, response) => {
    let text = 'UPDATE Products SET name = $1, artist = $2, category = $3, is_print = $4, price = $5, description = $6 WHERE id = $7'
    let index = request.params.id
    let values = [request.body.name, request.body.artist, request.body.category, request.body.is_print, request.body.price, request.body.description, index]
    client.query(text, values)
        .then(result => {
            console.log(result)
            response.send(result)
        })
        .catch(error => {
            console.log(error)
            response.send("OOPS! AN ERROR OCCURED.")
        })
})

// // Delete < unsure what to do
router.delete('/:id', (request, response) => {
	let index = request.params.id
	client.query(`DELETE from Products WHERE Products.id = ${index}`)
		.then( result => response.send(result.rows[0]))
		.catch( error => {
			console.log(error)
			response.send("OOPS! AN ERROR OCCURED.")
		})
})

module.exports = router