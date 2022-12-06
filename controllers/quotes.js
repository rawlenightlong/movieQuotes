const { Router } = require('express')
const express = require ('express')
const Quote = require('../models/quotes') 

const router = express.Router()



// INDEX ROUTE
router.get('/', (req, res) => {
    Quote.find({})
    .then((quotes) => {
        res.render('quotes/index.ejs', {quotes})
    })
})

// NEW ROUTE - GET
router.get('/new', (req, res) => {
    res.render('quotes/new.ejs')
})

// DESTROY ROUTE - POST

// UPDATE ROUTE - POST

// CREATE ROUTE - POST

// EDIT ROUTE - GET

// SHOW ROUTE - GET













module.exports = router