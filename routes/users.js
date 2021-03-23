var express = require('express');
const database = require('mime-db');
var router = express.Router();

const { Customer } = require('../models/regin');
const { Package } = require('../models/regin');
const { Booking } = require('../models/regin');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


/* GET package page. */
router.get('/packages', function (req, res, next) {
  res.render('packages');
});


// Author: Cecilia Santiago
/* GET package page. */
/*router.get("/packages", function (req, res, next) {
  Package.find((err, res1) => {
    res.render("packg", { packge: res1 });
  });
});*/

// Author: Cecilia Santiago
/* GET register page. */
router.get("/register", function (req, res, next) {
  res.render("customer");
});

// Author: Cecilia Santiago
/* GET one  package */
router.get("/book/:prodid", function (req, res, next) {
  Package.findOne({ PackageId: req.params.prodid }, (err, pkg) => {
    if (err) {
      return res.send(500, err);
    }
    console.log('This is the package:', pkg);
    res.render("book", { pack: pkg });
  });
});

// Author: Cecilia Santiago
/* POST Register page. */
router.post("/register", function (req, res, next) {
  const myregist = new Customer(req.body);
  myregist.save((err, result) => {
    //console.log('The data is saved in', result);
    if (err) { //res.send(err);
      console.log(err);
    }
  });
})

// Author: Cecilia Santiago
/* POST Booking page. */
router.post("/book", function (req, res, next) {
  const getbooking = new Booking(req.body);
  getbooking.save((err2, resb) => {
    console.log('Booking is saved in');
    if (err2) {
      console.log(err2);
    }
    res.render("thankyou")
  })
})

module.exports = router;
