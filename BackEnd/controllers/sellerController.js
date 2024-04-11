const mongoose = require('mongoose');
const Seller = require('../models/sellerModel');

// Controller function to handle seller registration
const registerSeller = async (req, res) => {
  try {
    const {
      organizationName,
      sellerName,
      panNumber,
      gstNumber,
      mobileNumber,
      email,
      organizationAddress,
      organizationDescription,
      accountNumber,
      ifscCode,
      bankName,
      password,
      agreedToTerms,
    } = req.body;

    // Check if seller with the given PAN number already exists
    const existingSeller = await Seller.findOne({ panNumber });
    if (existingSeller) {
      return res.status(400).json({ error: 'Seller with this PAN number already exists' });
    }

    // Create a new seller document
    const newSeller = await Seller.create({
      organizationName,
      sellerName,
      panNumber,
      gstNumber,
      mobileNumber,
      email,
      organizationAddress,
      organizationDescription,
      accountNumber,
      ifscCode,
      bankName,
      password,
      agreedToTerms,
      approved: false, // Set approved to false by default
    });

    // Save the seller document to the database
    //await newSeller.save();

    // Send success response
    res.status(201).json({ message: 'Seller registered successfully' });
  } catch (error) {
    // Handle error
    console.error('Error registering seller:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  registerSeller,
};
