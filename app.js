const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//IMPORT ROUTES
const postsRoute = require('./routes/posts')
app.use('/posts', postsRoute);



// ROUTES
app.get('/', (req,res) => {
    res.send('This is the homepage.');
})


// CONNECTING TO DATABASE
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true }, () =>
    console.log('Connected to the database!!'));



//LISTENING TO THE SERVER
app.listen(8000);