require('dotenv').config()

const express = require('express')
const productRoutes = require('./routes/products')

//  express app
const app = express()


//  middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


//  routes
app.use('/api/products', productRoutes)


//  Listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000')
})