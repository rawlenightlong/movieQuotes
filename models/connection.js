require('dotenv').config()
const mongoose = require('mongoose')

const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

//Establish connection
mongoose.set('strictQuery', true)
mongoose.connect(DATABASE_URL, CONFIG)



//Connection log events
mongoose.connection
.on("open", () => console.log("Connected to Mongoose"))
.on("close", () => console.log("Disconnected from Mongoose"))
.on("error", (error) => console.log(error))

//Export Mongoose for use in other files (specifically the Models folder)
module.exports = mongoose