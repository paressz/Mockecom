const bodyParser = require('body-parser');
const express = require('express');
const authRoute = require('./route/authRoute')
const searchRoute = require('./route/searchRoute')
const homeRoute = require('./route/homeRoute')
const shoppingCartRoute = require('./route/shoppingCartRoute')
const historyRoute = require('./route/historyRoute')

const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use('/', authRoute)
app.use('/', searchRoute)
app.use('/', homeRoute)
app.use('/', shoppingCartRoute)
app.use('/', historyRoute)

app.listen(port, () => {
    console.log(`RUN ON port ${port}`);
});