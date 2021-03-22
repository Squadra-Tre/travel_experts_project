const { Double, Int32 } = require('bson');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://travel-expert:travel1234@cluster0.orc02.mongodb.net/test?authSource=admin&replicaSet=atlas-71fnej-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
    { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const packSchema = new mongoose.Schema({
    PackageId: {
        type: Int32,
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
        type: Double,
    },
    PkgAgencyCommission: {
        type: Double,
    },

});

const Package = mongoose.model('Packages', packSchema);
module.export = Package;