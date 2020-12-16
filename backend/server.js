const rooturl = "http://localhost:3000";
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session')
const path = require('path');
const fs = require('fs');
var session = require('express-session');
var cookieParser = require('cookie-parser');

require('./passport-config');

app.set('view engine', 'ejs');

//const router = express.Router();

const db = require('./src/helpers/settings').mongoURI;

//var jwt = require('jsonwebtoken');
//const AWS=require('aws-sdk');

const multer = require('multer')

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true }) // Let us remove that nasty deprecation warrning :)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


// app.use(session({
//     secret              : 'cmpe_202',
//     resave              : false, // even if the session was never modified during the request, this forces the session to be saved back to the session store
//     saveUninitialized   : false, // Forces to save uninitialized session to db. uninitialized session is when it is new but not modified
//     duration            : 60 * 60 * 1000, //duration of Session : 30 minutes : 1800 seconds
//     activeDuration      :  5 * 60 * 1000
// }));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', rooturl);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.use(passport.initialize());
app.use(passport.session());
app.use(cors({ origin: rooturl, credentials: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use("/", initialRoute);
// app.use(app.router);
// routes.initialize(app);
// process.env.port ||
const port = 3010;

app.listen(port);
console.log("Server Listening on port " + port);

app.use(cookieSession({
  name: 'login-session',
  keys: ['key1', 'key2']
}))

app.use('/', require('./src/routes/users'));
app.use('/', require('./src/routes/authenticate'));
app.use('/search', require('./src/routes/search'));
app.use('/listing', require('./src/routes/listing'));
app.use('/admin', require('./src/routes/admin'));
app.use('/buyer', require('./src/routes/buyer'))
app.use('/application', require('./src/routes/application'))
