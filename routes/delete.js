var express = require('express');
var router = express.Router();
var deleteController= require('../controllers/delete-controller');
router.get('/delete/:id',deleteController.deleteData);
module.exports = router;