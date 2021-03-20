/*   Author: Cecilia Santiago   
     Schema for Customers
*/

const mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost:27017/newdb',
mongoose.connect('mongodb+srv://travel-expert:travel1234@cluster0.orc02.mongodb.net/test?authSource=admin&replicaSet=atlas-71fnej-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
    { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const regSchema = new mongoose.Schema({
    CustomerId: {
        type: String,
        trim: true,
        required: [true, 'First Name cannot be empty']
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

    AgentId: {
        type: String,
        trim: true,
        required: [true, 'First Name cannot be empty']
    },

    userid: {
        type: String,
        trim: true,
        required: [true, 'First Name cannot be empty']
    },

    passwd: {
        type: String,
        trim: true,
        required: [true, 'First Name cannot be empty']
    },


});

//.Customer came from users.js const { Customer } = require("../models/regin");
module.exports.Customer = mongoose.model('Customer', regSchema);
