
const express = require('express');
const Handlebars = require('handlebars')
const exphbs = require('express-handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const bodyParser = require("body-parser");
const path = require('path');
const logger = require('morgan');
const mongoose = require("mongoose");
const dotenv = require('dotenv').config()

// const result = dotenv.config()

// if (result.error) {
//   throw result.error
// }

// console.log(result.parsed)

const app = express();
const PORT = process.env.PORT || 8080;


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

mongoose.Promise = Promise;
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/scraperData"

console.log("MONGODB_URI", MONGODB_URI);

// mongoose.connect(MONGODB_URI)

mongoose.connect(MONGODB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true
    });


const db = mongoose.connection

db.on('error', err => console.log(`Mongoose connection error: ${err}`))
// view engine setup
db.once('open', () => console.log(`Connected to MongoDB`))


// Original
// app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));

// app.engine('hbs', hbs({ 
//     extname: 'hbs', 
//     defaultLayout: 'mainLayout', 
//     layoutsDir: __dirname + '/views/layouts/', 
//     handlebars: allowInsecurePrototypeAccess(Handlebars) }))


app.set('view engine', 'handlebars');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const routes = require('./routes/index')
app.use('/', routes)



// app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!   http://localhost:${PORT}/`))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

