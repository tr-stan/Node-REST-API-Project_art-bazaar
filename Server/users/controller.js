// import .env variables from local environment configurations
require('dotenv').config()

// Products Controller
const express = require('express')
const bodyParser = require('body-parser')
const { Client } = require('pg')

const router = express.Router()

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

// set up the PG module
const connectionString = process.env.DATABASE_URL

// instantiate new client
const client = new Client({ connectionString })

// connect to client
client.connect()
    .then(() => { console.log(`Connection to controller pg client successful!`) })
    .catch(error => { console.log('Sorry it seems we are experiencing some issues. Please try again.') })


// Read: Get all Users
router.get('/', (request, response) => {
    const text = `SELECT Users.username, Users.img_url, Users.is_customer, Users.is_artist, Users.id, Users.bio, Users_Private.first_name, Users_Private.last_name  FROM Users, Users_Private Where Users.id = Users_Private.public_id`
    client.query(text)
        .then(result => response.send(result.rows.map(item => item)))
        .catch(error => {
            console.log(error)
            response.send("OOPS! AN ERROR OCCURED.", error.name, error)
        })
})

// Read: Get one User
router.get('/:id', (request, response) => {
    const index = request.params.id
    const text = 'SELECT Users.username, Users.img_url, Users.is_customer, Users.is_artist, Users.bio, Users.id, Users_Private.first_name, Users_Private.last_name FROM Users, Users_Private WHERE Users.id = Users_Private.public_id AND Users.id = $1'
    const value = [index]
    client.query(text, value)
        .then(result => response.send(result.rows[0]))
        .catch(error => {
            response.send("OOPS! AN ERROR OCCURED.", error.name, error)
        })
})

// Create: Post one User's Public & Private Record

router.post('/', (request, response) => {
    const query = 'INSERT INTO Users(username, is_customer, is_artist, bio) VALUES($1, $2, $3, $4)'
    const values = [request.body.username, request.body.is_customer, request.body.is_artist, request.body.bio]
    console.log(values)
    client.query(query, values)
        .then(() => {
            let secondQuery = `INSERT INTO Users_Private(public_id, first_name, last_name, email, password) VALUES((SELECT id FROM Users WHERE Users.username=$1), $2, $3, $4, $5)`
            let secondValues = [request.body.username, request.body.first_name, request.body.last_name, request.body.email, request.body.password]
            console.log(secondValues)
            client.query(secondQuery, secondValues)
                .then(result => response.send(result.data))
                .catch(error => {
                    console.log(error)
                    response.send("OOPS! AN ERROR OCCURED WHEN ADDING PRIVATE USER DATA.", error.name, error)
                })
        })
        .catch(error => {
            console.log(error)
            response.send("OOPS! AN ERROR OCCURED ADDING USER DATA.", error.name, error)
        })

})

// router.post('/', (request, response) => {
//  let query = 'INSERT INTO Users(username, is_customer, is_artist, bio) VALUES($1, $2, $3, $4)'
//  let values = [request.body.username, request.body.is_customer, request.body.is_artist, request.body.bio]
//  console.log(values)
//  client.query(query, values)
//      .then(result => response.send(result))
//         .catch(error => {
//             console.log(error)
//             response.send("OOPS! AN ERROR OCCURED WHEN ADDING USER DATA.", error.name, error)
//         })
// })

// router.post('/', (request, response) => {
//     let query = 'INSERT INTO Users_Private(public_id, first_name, last_name, email, password) VALUES($1, $2, $3, $4, $5)'
//     let values = [request.body.public_id, request.body.first_name, request.body.last_name, request.body.email, request.body.password]
//     console.log(values)
//     client.query(query, values)
//         .then(result => response.send(result))
//         .catch(error => {
//             console.log(error)
//             response.send("OOPS! AN ERROR OCCURED WHEN ADDING PRIVATE USER DATA.", error.name, error)
//         })
// })

// Delete one User
router.delete('/:id', (request, response) => {
    const index = request.params.id
    const text = 'DELETE from Users, Users_Private WHERE Users.id = Users_Private.public_id AND Users.id = $1'
    const value = [index]
    client.query(text, value)
        .then(result => response.send(result))
        .catch(error => {
            console.log(error)
            response.send("OOPS! A DELETE ERROR OCCURED.", error.name, error.message, error)
        })
})


module.exports = router