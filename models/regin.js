/*   Author: Cecilia Santiago   
     Schema for Customers
*/

const mongoose = require('mongoose'), autoIncrement = require('mongoose-auto-increment');
/*const uniqueValidator = require("mongoose-unique-validator");*/
//const uniqueValidator = require("mongoose-unique-validator");

//mongoose.connect('mongodb://localhost:27017/newdb',
mongoose.connect('mongodb+srv://travel-expert:travel1234@cluster0.orc02.mongodb.net/travelexperts_mongodb_json_collections?authSource=admin&replicaSet=atlas-71fnej-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });

autoIncrement.initialize(mongoose);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Schema for packages

const packSchema = new mongoose.Schema({
    PackageId: {
        type: Number
    },
    PkgName: {
        type: String
    },

    PkgStartDate: {
        type: Date
    },

    PkgEndDate: {
        type: Date
    },

    PkgDesc: {
        type: String
    },

    PkgBasePrice: {
        type: String
    },

    Img: {
        type: String
    }

})


module.exports.Package = mongoose.model('Package', packSchema);

// Schema for booking

const bookSchema = new mongoose.Schema({
    _id: {
        type: Number
    },

    BookingId: {
        type: Number
    },

    BookingDate: {
        type: Date,
        default: Date.now,
        required: true
    },

    BookingNo: {
        type: String,
        trim: true,
    },

    TravelerCount: {
        type: Number,
        required: [true, 'Traveller cannot be empty']
    },

    CustomerId: {
        type: Number
    },

    TripTypeId: {
        type: Number
    },

    PackageId: {
        type: Number
    },

    Departure: {
        type: String
    },

    Arrival: {
        type: String
    }
})

// autoincrement _id and BookingId by 1
bookSchema.plugin(autoIncrement.plugin, { model: 'Booking', field: '_id', startAt: 3000 });
bookSchema.plugin(autoIncrement.plugin, { model: 'Booking', field: 'BookingId', startAt: 2001 });

module.exports.Booking = mongoose.model('Booking', bookSchema);