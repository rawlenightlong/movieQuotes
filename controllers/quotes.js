const express = require ('express')
const Quote = require('../models/quotes') 

const router = express.Router()

// LANDING ROUTE
// router.get('/', (req, res) => {
//     Quote.find({})
//     .then((quotes) => {
//         res.render('quotes/index.ejs', {quotes})
//     })
// })

router.get('/', (req, res) => {
    res.redirect('/quotes')
})














module.exports = router