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


// Read: Get all Users
router.get('/', (request, response) => {
    client.query("SELECT Users.username, Users.is_customer, Users.is_artist FROM Users")
        .then(result => response.send(result.rows.map(item => item)))
        .catch(error => {
            console.log(error)
            response.send("OOPS! AN ERROR OCCURED.", error.name, error)
        })
})

// Read: Get one User
router.get('/:id', (request, response) => {
    let index = request.params.id
    client.query(`SELECT Users.username, Users.is_customer, Users.is_artist FROM Users WHERE Users.id = ${index}`)
        .then(result => response.send(result))
        .catch(error => {
            response.send("OOPS! AN ERROR OCCURED.", error.name, error)
        })
})

// Create: Post one User's Public & Private Record

router.post('/', (request, response) => {
    let query = 'INSERT INTO Users(username, is_customer, is_artist, bio) VALUES($1, $2, $3, $4)'
    let values = [request.body.username, request.body.is_customer, request.body.is_artist, request.body.bio]
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
// 	let query = 'INSERT INTO Users(username, is_customer, is_artist, bio) VALUES($1, $2, $3, $4)'
// 	let values = [request.body.username, request.body.is_customer, request.body.is_artist, request.body.bio]
// 	console.log(values)
// 	client.query(query, values)
// 		.then(result => response.send(result))
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

// Update one User's public 
// router.put('/:id', (request, response) => {
//     let text = 'UPDATE Users SET username = $1, is_customer = $2, is_artist = $3 WHERE id = $4'
//     let index = request.params.id
//     let values = [request.body.username, request.body.is_customer, request.body.is_artist, index]
//     client.query(text, values)
//         .then(result => {
//             console.log(result)
//             response.send(result)
//         })
//         .catch(error => {
//             console.log(error)
//             response.send("OOPS! AN ERROR OCCURED.", error.name, error)
//         })
// })

// Delete one User
// router.delete('/:id', (request, response) => {
//     let index = request.params.id
//     client.query(`DELETE from Users, Users_Private WHERE Users.id = Users_Private.public_id AND Users.id = ${index}`)
//         .then(result => response.send(result))
//         .catch(error => {
//             console.log(error)
//             response.send("OOPS! AN ERROR OCCURED.", error.name, error)
//         })
// })

// Delete One User's Public Data
// router.delete('/:id', (request, response) => {
//     let index = request.params.id
//     client.query(`DELETE from Users WHERE Users.id = ${index}`)
//         .then(result => response.send(result))
//         .catch(error => {
//             console.log(error)
//             response.send("OOPS! AN ERROR OCCURED.", error.name, error)
//         })
// })

// Delete One User's Private Data
// router.delete('/:id', (request, response) => {
//     let index = request.params.id
//     client.query(`DELETE from Users_Private WHERE Users_Private.id = ${index}`)
//         .then(result => response.send(result))
//         .catch(error => {
//             console.log(error)
//             response.send("OOPS! AN ERROR OCCURED.", error.name, error)
//         })
// })


module.exports = router