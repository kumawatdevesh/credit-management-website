const express = require('express');
const app = express();
const controller = require('./routes/users');
const users = require('./models/db');
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(controller);

app.listen(5000 || process.env.PORT);