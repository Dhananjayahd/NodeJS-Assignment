const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = process.env.port || 5000;

const route = require('./routes/route');

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use('/',route);


app.listen(port,console.log(`Server started at port ${port}`));

