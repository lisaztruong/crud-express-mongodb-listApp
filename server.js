console.log("hello lisa bae");

var express = require('express');
var app = express();
var bodyParser= require('body-parser');
var MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// connect to server only when database is connected
var db;
MongoClient.connect('mongodb://lisa:lisa@ds161210.mlab.com:61210/crud', (err, database) => {
  if (err) return console.log(err);
  db = database;
  app.listen(3000, function(){
    console.log('listening on 3000')
  });
})

// app.get('/', function(req,res){
//   res.send('hello world')
// });
// es6 below
app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {quotesLISA: result})
  })
})

// store quote into database and create the quotes collection
app.post('/quotes', (req,res) => {
  // console.log('hello, quotes');
  // console.log(req.body);
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log('saved to database');
    res.redirect('/')
  })
})
