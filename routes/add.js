/*Matt Biesbroek - Team 3*/

var express = require('express');
var router = express.Router();
const pack = require('../models/packages');

const mongoose = require('mongoose')
const dbURI = "mongodb+srv://travel-expert:travel1234@cluster0.orc02.mongodb.net/travelexperts_mongodb_json_collections?authSource=admin&replicaSet=atlas-71fnej-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => console.log('ADD connected to db.'))
.catch((err) => console.log(err));
const db = mongoose.connection;

router.get('/', function (req, res, next){
  packs.find(function(err,packages) {
    res.render('add', {packages});
});
  });

router.post('/', function (req, res, next) {
  const travpack = new packs(req.body);

  travpack.save((err, result)=> {
    if (err) return console.log(err);

    res.redirect('/add');
  });
})

module.exports = router;