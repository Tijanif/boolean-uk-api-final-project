const express = require('express')
const morgan = require('morgan')

const app = express()

// Middleware
app.use(morgan('dev'))
app.use(express.json())

// Routes


// Listen

const PORT = 4000

app.listen(PORT, (req: any, res: { json: (arg0: { msg: string }) => void }) => {
res.json({msg: "I am ruuning"})
console.log("I am running");


})
