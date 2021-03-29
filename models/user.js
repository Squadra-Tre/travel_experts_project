/*   Author: Cecilia Santiago   
     Schema for Customers
*/

const mongoose = require('mongoose'), autoIncrement = require('mongoose-auto-increment');
const uniqueValidator = require("mongoose-unique-validator");


mongoose.connect(process.env.MONGO_URL,
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
        trim: true,
        required: [true, 'Home phone cannot be empty']
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
        required: [true, 'User Name cannot be empty'],
        unique: 'The userid must be unique.',
        lowercase: true
    },

    passwd: {
        type: String,
        trim: true,
        required: [true, 'Password cannot be empty'],
        validate: {
            validator: function (v) {
                return /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{6,}$/.test(v);
            },
            message: props =>
                `Password should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 6 characters.`
        }
    }

})

regSchema.plugin(uniqueValidator);

// autoincrement _id and CustomerId by 1
regSchema.plugin(autoIncrement.plugin, { model: 'Customer', field: '_id', startAt: 149 });
regSchema.plugin(autoIncrement.plugin, { model: 'Customer', field: 'CustomerId', startAt: 149 });

//.Customer came from users.js const { Customer } = require("../models/user");
module.exports.Customer = mongoose.model('Customer', regSchema);
