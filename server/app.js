const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()

app.listen(5000);

app.use(express.urlencoded({extended: false}))

const URI = process.env.URI
mongoose.connect(URI)
.then((result) => {
    console.log("Database connected Successfully");
})
.catch((err) => {
    console.log(err);
})

const staffRoutes = require('./routes/staffs')

app.use('/', staffRoutes)