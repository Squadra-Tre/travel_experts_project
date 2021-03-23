var express = require('express');
const database = require('mime-db');
//const { Console } = require('node:console');
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


/* GET package page. */
/*router.get("/packages", function (req, res, next) {
  Package.find((err, res1) => {
    res.render("packg", { packge: res1 });
  });
});*/


/* GET register page. */
router.get("/register", function (req, res, next) {
  res.render("customer");
});


/* GET one  package. */
router.get("/book/:prodid", function (req, res, next) {
  Package.findOne({ PackageId: req.params.prodid }, (err, pkg) => {

    /* GET Register page. */
    //router.get("/register", function (req, res, next) {
    //Package.findOne((err, package) => {
    if (err) {
      return res.send(500, err);
    }
    console.log('This is the package:', pkg);
    res.render("book", { pkg });
  });
});


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

/* POST Booking page. */
/*const getbooking = new Booking(req.body);
getbooking.save({
  $addFields: {
    BookingNo: "WWWW", CustomerId: myregist.CustomerId, TripTypeId: '', PackageId: ''
  }
}, (err2, resb) => {
  console.log('Booking is saved in', resb);
  if (err2) {
    console.log(err2);
  }
})*/

module.exports = router;


/* GET booking page. */
/*router.get("/book", function (req, res, next) {
  res.render("book");
});
*/

/* POST Booking page. */
/*router.post("/book", function (req, res, next) {
  const myregist = new Customer(req.body);
  const getbooking = new Booking(req.body);
    const getbooking = new Booking(req.body);
  getbooking.insert({ BookingNo: "WWWW", CustomerId: myregist.CustomerId, TripTypeId: '', PackageId: '' })
  getbooking.save({
    $addFields: {
      BookingNo: "WWWW", CustomerId: myregist.CustomerId, TripTypeId: '', PackageId: ''
    }
  }, (err2, resb) => {
    console.log('Booking is saved in', resb);
    if (err2) {
      console.log(err2);
    }
  })
})*/

/*res.render("thankyou", {
  varbody: "div",
  varbackimg: "div",
  result
});*/


/* GET a Package */
/*router.get("/:package", function (req, res, next) {
  Package.findOne({ PackageId: req.params.package }, (err, result) => {
    if (err) { //res.send(err);
      console.log(err);
      //console.log(result);
    };
  });
})*/

/* get the click data from the database
router.get('/clicks', (req, res) => {
  const myregist = new Customer(req.body);
  myregist('clicks').find().toArray((err, result) => {
    if (err)
      return console.log(err);

    res.send(result);
  });
});


//This is Cecilia
/*Push Test*/
