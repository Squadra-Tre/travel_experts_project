var express = require('express');
const database = require('mime-db');
var router = express.Router();

const { Package } = require('../models/regin');
const { Booking } = require('../models/regin');

// Author: Cecilia Santiago
/* GET one  package */
router.get("/:prodid", function (req, res, next) {
    Package.findOne({ PackageId: req.params.prodid }, (err, pkg) => {
        if (err) {
            return res.send(500, err);
        }
        console.log('This is the package:', pkg);
        res.render("book", { pack: pkg });
    });
});


// Author: Cecilia Santiago
/* POST Booking page. */
router.post("/", function (req, res, next) {
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