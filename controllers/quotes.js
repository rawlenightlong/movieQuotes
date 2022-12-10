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

// CREATE ROUTE - POST
router.post('/', (req, res) => {
    Quote.create(req.body, (err, quote) => {
        res.redirect("/")
    })
})

// EDIT ROUTE - GET
router.get('/:id/edit', (req, res) => {
    Quote.findById(req.params.id, (err, quote) => {
        res.render('quotes/edit.ejs', {quote})
    })
    
})


// UPDATE ROUTE - POST
router.put('/:id', (req, res) => {
    const id = req.params.id
    Quote.findByIdAndUpdate(id, req.body, {new: true}, (err, quote) => {
        res.redirect('/')
    })
})

// DESTROY ROUTE - POST
router.delete('/:id', (req, res) => {
    const id = req.params.id
    Quote.findByIdAndDelete(id, (err, quote) => {
        res.redirect('/')
    })
})

// SHOW ROUTE - GET
router.get('/:id', (req, res) => {
    
    console.log(req.params.id)
    Quote.findById(req.params.id, (err, quote) => {
        res.render('quotes/show.ejs', {quote})
    })
})













module.exports = router