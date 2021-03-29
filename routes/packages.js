var express = require('express');
var router = express.Router();
const pack = require('../models/packages');

const mongoose = require('mongoose')
const dbURI = process.env.MONGO_URL;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log('PACKAGES connected to db.'))
  .catch((err) => console.log(err));
const db = mongoose.connection;

/* Render Dynamic Package Page */
router.get('/', function (req, res, next) {
  pack.find(function (err, packages) {
    console.log(packages);
    res.render('packagesdynamic', { packages });
  });
});

module.exports = router;