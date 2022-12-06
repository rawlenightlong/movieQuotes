const mongoose = require('./connection')


////////////////////////
// Models
////////////////////////

const {Schema, model} = mongoose
const quoteSchema = new Schema({
    quote: String,
    movie: String,
    character: String,
    year: Number
})

const Quote = model("Quote", quoteSchema)

module.exports = Quote