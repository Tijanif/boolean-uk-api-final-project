const express = require('express')
const morgan = require('morgan')

const app = express()

// Middleware
app.use(morgan('dev'))
app.use(express.json())

// Routes


// Listen

const PORT = 4000

app.listen(PORT, () => {

console.log("I am running");


})
