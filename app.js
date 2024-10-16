const bodyParser = require('body-parser');
const express = require('express');
const authRoute = require('./route/authRoute')
const app = express();
const port = 3000;

app.get('/',(req, res) =>  {
    res.send('awawaw');
});

app.use(bodyParser.json())
app.use('/', authRoute)

app.listen(port, () => {
    console.log(`RUN ON port ${port}`);
});