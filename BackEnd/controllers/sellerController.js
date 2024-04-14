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


const loginSeller = async (req, res) => {
  try {
    const {
      panNumber,
      password,
    } = req.body;

    // Check if seller with the given PAN number exists
    const existingSeller = await Seller.findOne({ panNumber })
    if (!existingSeller) {
      return res.status(400).json({ error: 'Seller with this PAN number does not exist' });
    }

    // Check if password is correct
    if (existingSeller.password !== password) {
      return res.status(400).json({ error: 'Incorrect password' });
    }

    // Check if seller is approved
    if (!existingSeller.approved) {
      return res.status(400).json({ error: 'Seller account not approved yet' });
    }

    const sellerData = { existingSeller };
    // Send success response
    // res.status(200).json({ message: 'Seller logged in successfully' });
    res.status(200).json(sellerData);
    // // Store seller data in the session
    // req.session.seller = sellerData;
  } catch (error) {
    // Handle error
    console.error('Error logging in seller:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}



// Function to approve seller
const approveSeller = async (req, res) => {
  try {
    const sellerId = req.params.id;
    const seller = await Seller.findByIdAndUpdate(sellerId, { approved: true }, { new: true });
    if (!seller) {
      return res.status(404).json({ error: 'Seller not found' });
    }
    res.status(200).json({ message: 'Seller approved successfully' });
  } catch (error) {
    console.error('Error approving seller:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Function to reject seller
const rejectSeller = async (req, res) => {
  try {
    const sellerId = req.params.id;
    const seller = await Seller.findByIdAndDelete(sellerId);
    if (!seller) {
      return res.status(404).json({ error: 'Seller not found' });
    }
    res.status(200).json({ message: 'Seller rejected successfully' });
  } catch (error) {
    console.error('Error rejecting seller:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Function to get all sellers
const getAllSellers = async (req, res) => {
  try {
    const sellers = await Seller.find();
    res.status(200).json(sellers);
  } catch (error) {
    console.error('Error fetching sellers:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



module.exports = {
  registerSeller,
  loginSeller,
  approveSeller,
  rejectSeller,
  getAllSellers,
};