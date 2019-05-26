// import .env variables from local environment configurations
require('dotenv').config()

// Products Controller
const express = require('express')
const bodyParser = require('body-parser')
const { Client } = require('pg')

let router = express.Router()

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

// set up the PG module
const connectionString = process.env.CONNECTION_STRING

// instantiate new client
const client = new Client({ connectionString })

client.connect()
    .then(() => { console.log(`Connection to controller pg client successful!`) })
    .catch(error => { console.log('Sorry it seems we are experiencing some issues. Please try again.') })


// Read/Get all products
router.get('/', (request, response) => {
    client.query("SELECT Products.name, Products.category, Products.is_print, Products.price, Products.description, Products.id, Users_Private.first_name, Users_Private.last_name, Users_Private.public_id FROM Products, Users_Private WHERE Products.artist = Users_Private.public_id")
        .then(result => response.send(result.rows.map(item => item)))
        .catch(error => {
            console.log(error.message)
            response.send("OOPS! AN ERROR OCCURED.", error.name, error)
        })
})

// Read/Get all products from one artist
router.get('/:artistID', (request, response) => {
    let artist = request.params.artistID
    client.query(`SELECT Products.name, Products.id, Products.category, Products.is_print, Products.price, Products.description, Products.id, Users_Private.first_name, Users_Private.last_name, Users_Private.public_id FROM Products, Users_Private WHERE Products.artist = Users_Private.public_id AND Users_Private.public_id = ${artist}`)
        .then(result => response.send(result.rows.map(item => item)))
        .catch(error => {
            console.log(error.message)
            response.send("OOPS! AN ERROR OCCURED.", error.name, error)
        })
})

// Read/Get one product
router.get('/:artistID/:productID', (request, response) => {
    let artist = request.params.artistID
    let index = request.params.productID
    client.query(`SELECT Products.name, Products.id, Products.category, Products.is_print, Products.price, Products.description, Users_Private.first_name, Users_Private.last_name, Users_Private.public_id FROM Products, Users_Private WHERE Products.artist = Users_Private.public_id AND Products.id = ${index} AND Users_Private.public_id = ${artist}`)
        .then(result => response.send(result.rows[0]))
        .catch(error => {
            response.send("OOPS! AN ERROR OCCURED.", error.name, error)
        })
})

// Create one product

router.post('/', (request, response) => {
    let text = 'INSERT INTO Products(name, artist, category, is_print, price, description) VALUES($1, (SELECT id FROM Users WHERE Users.username=$2), $3, $4, $5, $6)'

    let values = [request.body.name, request.body.artist, request.body.category, request.body.is_print, request.body.price, request.body.description]
    console.log(values)
    client.query(text, values)
        .then(result => response.send(result))
        .catch(error => {
            console.log(error)
            response.send("OOPS! AN ERROR OCCURED.")
        })

})

// Update one product
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

// Delete one product
router.delete('/:id', (request, response) => {
    let index = request.params.id
    client.query(`DELETE from Products WHERE Products.id = ${index}`)
        .then( result => response.send(result.rows))
        .catch( error => {
            console.log(error)
            response.send("OOPS! AN ERROR OCCURED.")
        })
})

module.exports = router