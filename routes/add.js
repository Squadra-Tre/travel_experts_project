var express = require('express');
var router = express.Router();
const pack = require('../models/packages');

const mongoose = require('mongoose')
const dbURI = process.env.MONGO_URL;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log('ADD connected to db.'))
  .catch((err) => console.log(err));
const db = mongoose.connection;

router.get('/', function (req, res, next) {
  res.render('add');
});

router.post('/', function (req, res, next) {
  const travpack = new pack(req.body);

  travpack.save((err, result) => {
    if (err) return console.log(err);

    res.redirect('/add');
  });
})

module.exports = router;