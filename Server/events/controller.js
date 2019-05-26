// import .env variables from local environment configurations
require('dotenv').config()

// Events Controller
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

// connect to client
client.connect()
    .then(() => { console.log(`Connection to controller pg client successful!`) })
    .catch(error => { console.log('Sorry it seems we are experiencing some issues. Please try again.') })


// Read: Get all Events
router.get('/', (request, response) => {
    client.query(`SELECT DISTINCT ON (Events.id) Events.id, Events.name, Events.dateandtime, Events.event_img, Events.latitude, Events.longitude, Events.artists, Events.description FROM Events WHERE Events.dateandtime >= NOW()`)
        .then(result => response.send(result.rows.map(item => item)))
        .catch(error => {
            console.log(error)
            response.send("OOPS! ERROR WITH GET ALL EVENTS.", error.name, error)
        })
})


// Read: Get specific Event details
router.get('/:eventId', (request, response) => {
	let eventId = request.params.eventId
    client.query(`SELECT Events.id, Events.name, to_char(Events.dateandtime, 'FMMONTH DD HH12:MI AM'), Events.event_img, Events.latitude, Events.longitude, Events.artists, Events.description, Users_Private.public_id, Users.bio, Users_Private.first_name, Users_Private.last_name  FROM Events, Users, Users_Private WHERE Users.id = Users_Private.public_id AND Events.dateandtime >= NOW() AND Users.id = ANY (Events.artists) AND Events.id = ${eventId}`)
        .then(result => response.send(result.rows[0]))
        .catch(error => {
            console.log(error)
            response.send("OOPS! ERROR WITH GET BY ID.", error.name, error)
        })
})


module.exports = router