//const { TooManyRequests } = require("http-errors");
const mongoose = require("mongoose");
const agencySchema = new mongoose.Schema({
  AgencyId: {
    type: Number,
    required: true,
  },

  AgncyAddress: {
    type: String,
    required: true,
  },

  AgncyCity: {
    type: String,
    required: true,
  },
});

const agencies = mongoose.model("Agency", agencySchema);
module.exports = agencies;
