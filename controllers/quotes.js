const { Router } = require('express')
const express = require ('express')
const Quote = require('../models/quotes') 

const router = express.Router()

// LANDING ROUTE
router.get('/', (req, res) => {
    res.redirect('/quotes')
})

// INDEX ROUTE
router.get('/quotes', (req, res) => {
    Quote.find({})
    .then((quotes) => {
        res.render('quotes/index.ejs', {quotes})
    })
})

// NEW ROUTE

// DESTROY ROUTE

// UPDATE ROUTE

// CREATE ROUTE

// EDIT ROUTE

// SHOW ROUTE













module.exports = router