const express = require('express')

const router = express.Router()

//  get all products
router.get('/', (req, res) => {
    res.json({msg: 'GET all products'})
})

router.get('/:id', (req, res) => {
    res.json({msg: 'get single product'})
})

router.post('/', (req,res) => {
    res.json({msg: 'post a product'})
})

router.delete('/:id', (req,res) => {
    res.json({msg: 'Delete a product'})
})

router.patch('/:id', (req,res) => {
    res.json({msg: 'Update a product'})
})


module.exports = router