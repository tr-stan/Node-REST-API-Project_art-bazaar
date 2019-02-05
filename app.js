const express = require('express')
const bodyParser = require('body-parser')
const { Client } = require('pg')
const morgan = require('morgan')
const compression = require('compression')
const productRouter = require('./Server/products/controller.js')
const userRouter = require('./Server/users/controller.js')

//set port
const PORT = 9000

let app = express()

// mount morgan middleware to log most relevant stdout requests
app.use(morgan('dev'))
// compress all responses
app.use(compression())

// set up the PG module
const connectionString = 'postgresql://tristanbennett:@localhost:5432/art-bazaar'

// instantiate new client
const client = new Client({ connectionString })

client.connect()
	.then(() => { console.log(`Connection to postgres successful!`)})
	.catch(error => { console.log('Sorry it seems we are experiencing some issues. Please try again.')})

// mount products and users routers at specified url paths
app.use('/products', productRouter)
app.use('/users', userRouter)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})