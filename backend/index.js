require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const uri = process.env.MONGO_URI;

const app = express();
mongoose.connect(uri, () =>{
    console.log('Connected to MongoDB');
})

app.listen(PORT,() =>{
    console.log(('Server is running on port 3000'));
})