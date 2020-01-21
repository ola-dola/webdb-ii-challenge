const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(express.json());
app.use(helmet());

app.use((req, res) => {
    res.json("I'm alive!");
})

module.exports = app;