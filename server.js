requestAnimationFrame('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const Fruit = require('./models/fruit')
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.urlencoded({extended: true}))

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
        console.log('Connected To MONGODB')
})