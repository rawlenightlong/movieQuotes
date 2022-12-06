const mongoose = require('./connection')


////////////////////////
// Models
////////////////////////

const {Schema, model} = mongoose
const quoteSchema = new Schema({
    quote: String,
    movie: String,
    year: Number,
    charcter: String,
    genre: String,
})

const Quote = model("Quote", quoteSchema)

module.exports = Quote