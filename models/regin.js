/*   Author: Cecilia Santiago   
     Schema for Customers
*/

const mongoose = require('mongoose'), autoIncrement = require('mongoose-auto-increment');

//mongoose.connect('mongodb://localhost:27017/newdb',
mongoose.connect('mongodb+srv://travel-expert:travel1234@cluster0.orc02.mongodb.net/travelexperts_mongodb_json_collections?authSource=admin&replicaSet=atlas-71fnej-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });

autoIncrement.initialize(mongoose);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//Schema for customers

const regSchema = new mongoose.Schema({
    _id: {
        type: Number
    },

    CustomerId: {
        type: Number
    },

    CustFirstName: {
        type: String,
        trim: true,
        required: [true, 'First Name cannot be empty']
    },

    CustLastName: {
        type: String,
        trim: true,
        required: [true, 'Last Name cannot be empty']
    },

    CustAddress: {
        type: String,
        trim: true,
        required: [true, 'Address 1 cannot be empty']
    },

    CustCity: {
        type: String,
        trim: true,
        required: [true, 'City cannot be empty']
    },

    CustProv: {
        type: String,
        trim: true,
        required: [true, 'Province cannot be empty'],
    },

    CustPostal: {
        type: String,
        trim: true,
        required: [true, 'Postal cannot be empty']
    },

    CustCountry: {
        type: String,
        trim: true,
        required: [true, 'Email cannot be empty']
    },

    CustHomePhone: {
        type: String,
        trim: true
    },

    CustBusPhone: {
        type: String,
        trim: true
    },

    CustEmail: {
        type: String,
        trim: true,
        required: [true, 'Email cannot be empty']
    },

    userid: {
        type: String,
        trim: true,
        required: [true, 'User Name cannot be empty']
    },

    passwd: {
        type: String,
        trim: true,
        required: [true, 'Password cannot be empty']
    },

    versionKey: false,
})

// autoincrement _id and CustomerId by 1
regSchema.plugin(autoIncrement.plugin, { model: 'Customer', field: '_id', startAt: 149 });
regSchema.plugin(autoIncrement.plugin, { model: 'Customer', field: 'CustomerId', startAt: 149 });

//.Customer came from users.js const { Customer } = require("../models/regin");
module.exports.Customer = mongoose.model('Customer', regSchema);


// Schema for packages

const packSchema = new mongoose.Schema({
    PackageId: {
        type: Number
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
        required: false
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
    }
})

bookSchema.plugin(autoIncrement.plugin, { model: 'Booking', field: '_id', startAt: 149 });
bookSchema.plugin(autoIncrement.plugin, { model: 'Booking', field: 'BookingId', startAt: 149 });

module.exports.Booking = mongoose.model('Booking', bookSchema);