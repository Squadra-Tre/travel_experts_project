//const { TooManyRequests } = require("http-errors");
const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
  AgtFirstName: {
    type: String,
    required: true,
  },

  AgtLastName: {
    type: String,
    required: true,
  },

  AgencyId: {
    type: Number,
    required: true,
  },

  AgtEmail: {
    type: String,
    required: true,
  },

  AgtBusPhone: {
    type: String,
    required: true,
  },

  AgtPosition: {
    type: String,
    required: true,
  },
});

const agents = mongoose.model("Agent", contactSchema);
module.exports = agents;
