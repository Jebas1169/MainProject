const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
  organizationName: {
    type: String,
    required: true,
  },
  sellerName: {
    type: String,
    required: true,
  },
  panNumber: {
    type: String,
    required: true,
  },
  gstNumber: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  organizationAddress: {
    type: String,
    required: true,
  },
  organizationDescription: {
    type: String,
    required: true,
  },
  accountNumber: {
    type: String,
    required: true,
  },
  ifscCode: {
    type: String,
    required: true,
  },
  bankName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  agreedToTerms: {
    type: Boolean,
    required: true,
  },
  approved: {
    type: Boolean,
    default: false,
  },
});

const Seller = mongoose.model('Seller', sellerSchema);

module.exports = Seller;