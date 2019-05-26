// import .env variables from local environment configurations
require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const { Client } = require('pg')
const morgan = require('morgan')
const compression = require('compression')
const productRouter = require('./Server/products/controller.js')
const userRouter = require('./Server/users/controller.js')
const eventRouter = require('./Server/events/controller.js')
const cors = require('cors')


//set port
const PORT = process.env.PORT

let app = express()
// mount cors in order to connect to React UI
app.use(cors())
// mount morgan middleware to log most relevant stdout requests
app.use(morgan('dev'))
// compress all responses
app.use(compression())

// set up the PG module
const connectionString = `${process.env.DATABASE_URL}`

// instantiate new client
const client = new Client({ connectionString })

client.connect()
	.then(() => { console.log(`Connection to postgres successful!`)})
	.catch(error => { console.log('Sorry it seems we are experiencing some issues. Please try again.')})

// mount products and users routers at specified url paths
app.use('/products', productRouter)
app.use('/users', userRouter)
app.use('/events', eventRouter)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})