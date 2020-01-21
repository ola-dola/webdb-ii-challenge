const express = require('express');
const helmet = require('helmet');
const carsRouter = require('./cars/cars-router');

const app = express();

app.use(express.json());
app.use(helmet());

app.use('/api/cars', carsRouter);

app.use((req, res) => {
    res.json("I'm alive!");
})

module.exports = app;