const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const methodOverride = require('method-override')
const PORT = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL


//////////////////
// Middleware
//////////////////
app.use(morgan('tiny')) // logging
app.use(methodOverride("_method")) // override post requests for DELETE routes
app.use(express.urlencoded({extended: true})) // parses url encoded bodies (create route requests)
app.use(express.static("public")) // serve files from public folder


// App Listener
app.listen(PORT, (req, res) => {
    console.log(`Hey there Delilah, what's it like in Port ${PORT}`)
})