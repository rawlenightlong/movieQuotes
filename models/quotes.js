const mongoose = require('./connection')


////////////////////////
// Models
////////////////////////

const {Schema, model} = mongoose
const quoteSchema = new Schema({
    quote: String,
    character: String,
    movie: String,
    year: Number,
    actor: String
})

const Quote = model("Quote", quoteSchema)

module.exports = Quote