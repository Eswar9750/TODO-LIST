const express = require('express');
const mongoose = require('mongoose');
const route = require('./routes/ToDoRoute');

const app = express();
const port = 5500;

app.use(express.json());


mongoose.connect('mongodb://127.0.0.1/react1').then(() => {
    console.log('Database connected !!!');
}).catch(err => console.log(err.message));


app.use(route);

app.listen(port, () => console.log(`running on port : ${port}`));