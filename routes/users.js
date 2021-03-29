var express = require('express');
const database = require('mime-db');
var router = express.Router();
const bcrypt = require("bcryptjs");

const { Customer } = require('../models/user');
const passport = require('passport');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


// Author: Cecilia Santiago
/* GET register page. */
router.get("/register", function (req, res, next) {
  res.render("customer", {
    errors: {},
    data: {},
    invbox: "border border-info",
  });
});


// Author: Cecilia Santiago
/* POST Register page. */
router.post("/register", function (req, res, next) {
  bcrypt.hash(req.body.passwd, 10, (err, hashedPassword) => {
    if (err) throw err;
    // Replace the plain password with the hashed password
    req.body.passwd = hashedPassword;

    const myregist = new Customer(req.body);
    console.log(req.body);
    myregist.save((err, result) => {
      console.log('The data is saved in', result);
      if (err) {
        const errorObj = {};
        const errorKeys = Object.keys(err.errors);
        errorKeys.forEach(key => errorObj[key] = err.errors[key].message);
        //console.log(errorObj);
        return res.render("customer",
          {
            errors: errorObj,
            data: req.body,
            invbox: "border border-danger",
          });
      }
      const accntmsg = `Your account has been created ${result.CustFirstName} ${result.CustLastName}`;
      res.redirect('/users/register/?accntmsg=' + accntmsg);
    });
  })
})

module.exports = router;
