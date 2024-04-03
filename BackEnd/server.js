require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const productRoutes = require('./routes/products')

// express app
const app = express()

// Middleware
// Enable CORS for all origins
app.use(cors());
// Parse JSON data
app.use(express.json())

// Logging the request
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/products', productRoutes)

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

// Connect to the database
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('DB connected')
        // Listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log('DB connection failed')
        console.log(error)
    })
