const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const packSchema = new mongoose.Schema({
    PackageId: {
        type: Number,
    },
    PkgName: {
        type: String,
    },
    PkgStartDate: {
        type: Date,
    },
    PkgEndDate: {
        type: Date,
    },
    PkgDesc: {
        type: String,
    },
    PkgBasePrice: {
        type: Number,
    },
    PkgAgencyCommission: {
        type: Number,
    },
    Img: {
        type: String,
    },
    ImgLg: {
        type: String,
    },

});

module.exports = mongoose.model('package', packSchema)