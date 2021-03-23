var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
const pack = require('../models/packages');

const mongoose = require('mongoose')
const dbURI = "mongodb+srv://travel-expert:travel1234@cluster0.orc02.mongodb.net/travelexperts_mongodb_json_collections?authSource=admin&replicaSet=atlas-71fnej-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log('Connected to db.'))
  .catch((err) => console.log(err));
const db = mongoose.connection;

/* Render Dynamic Package Page */
router.get('/', function(req, res, next) {
    pack.find(function(err,packages) {
        console.log(packages);
        res.render('packagesdynamic', {packages});
    });
});    

/* Render Dynamic Package Detail Page */
router.get('/details', function(req, res, next) {
    res.render('details');
});



module.exports = router;