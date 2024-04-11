import React, { useState } from 'react';
import axios from 'axios';
 
const Registration = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    sellerName: '',
    panNumber: '',
    gstNumber: '',
    mobileNumber: '',
    email: '',
    organizationAddress: '',
    organizationDescription: '',
    accountNumber: '',
    ifscCode: '',
    bankName: '',
    password: '',
    confirmPassword: '',
    agreedToTerms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    try {
      const response = await axios.post('/api/sellers/register', formData);
      console.log(response.data);
      // Redirect or show success message after successful registration
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle error, show error message or retry registration
    }
  };

  const validateFormData = (data) => {
    const errors = {};
    if (!data.organizationName) {
      errors.organizationName = 'Organization name is required';
    }
    if (!data.sellerName) {
      errors.sellerName = 'Seller name is required';
    }
    if (!data.panNumber) {
      errors.panNumber = 'PAN number is required';
    }
    if (!data.gstNumber) {
      errors.gstNumber = 'GST number is required';
    }
    if (!data.mobileNumber) {
      errors.mobileNumber = 'Mobile number is required';
    }
    if (!data.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Invalid email address';
    }
    if (!data.organizationAddress) {
      errors.organizationAddress = 'Organization address is required';
    }
    if (!data.organizationDescription) {
      errors.organizationDescription = 'Organization description is required';
    }
    if (!data.accountNumber) {
      errors.accountNumber = 'Account number is required';
    }
    if (!data.ifscCode) {
      errors.ifscCode = 'IFSC code is required';
    }
    if (!data.bankName) {
      errors.bankName = 'Bank name is required';
    }
    if (!data.password) {
      errors.password = 'Password is required';
    } else if (data.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    if (!data.confirmPassword) {
      errors.confirmPassword = 'Confirm password is required';
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if (!data.agreedToTerms) {
      errors.agreedToTerms = 'Please accept terms and conditions';
    }
    return errors;
  };

  return (
    <div>
      <h2>Seller Registration</h2>
      <form onSubmit={handleSubmit}>
        {/* Organization Name */}
        <label>
          Organization Name:
          <input
            type="text"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
            required
          />
          {errors.organizationName && <span>{errors.organizationName}</span>}
        </label>

        {/* Seller Name */}
        <label>
          Seller Name:
          <input
            type="text"
            name="sellerName"
            value={formData.sellerName}
            onChange={handleChange}
            required
          />
          {errors.sellerName && <span>{errors.sellerName}</span>}
        </label>

        {/* PAN Number */}
        <label>
          PAN Number:
          <input
            type="text"
            name="panNumber"
            value={formData.panNumber}
            onChange={handleChange}
            required
          />
          {errors.panNumber && <span>{errors.panNumber}</span>}
        </label>

        {/* GST Number */}
        <label>
          GST Number:
          <input
            type="text"
            name="gstNumber"
            value={formData.gstNumber}
            onChange={handleChange}
            required
          />
          {errors.gstNumber && <span>{errors.gstNumber}</span>}
        </label>

        {/* Mobile Number */}
        <label>
          Mobile Number:
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
          {errors.mobileNumber && <span>{errors.mobileNumber}</span>}
        </label>

        {/* Email */}
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span>{errors.email}</span>}
        </label>

        {/* Organization Address */}
        <label>
          Organization Address:
          <textarea
            name="organizationAddress"
            value={formData.organizationAddress}
            onChange={handleChange}
            required
          />
          {errors.organizationAddress && <span>{errors.organizationAddress}</span>}
        </label>

        {/* Organization Description */}
        <label>
          Organization Description:
          <textarea
            name="organizationDescription"
            value={formData.organizationDescription}
            onChange={handleChange}
            required
          />
          {errors.organizationDescription && <span>{errors.organizationDescription}</span>}
        </label>

        {/* Bank Details */}
        <label>
          Account Number:
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            required
          />
          {errors.accountNumber && <span>{errors.accountNumber}</span>}
        </label>
        <label>
          IFSC Code:
          <input
            type="text"
            name="ifscCode"
            value={formData.ifscCode}
            onChange={handleChange}
            required
          />
          {errors.ifscCode && <span>{errors.ifscCode}</span>}
        </label>
        <label>
          Bank Name:
          <input
            type="text"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            required
          />
          {errors.bankName && <span>{errors.bankName}</span>}
        </label>

        {/* Password */}
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <span>{errors.password}</span>}
        </label>

        {/* Confirm Password */}
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </label>

        {/* Checkbox for terms and conditions */}
        <label>
          <input
            type="checkbox"
            name="agreedToTerms"
            checked={formData.agreedToTerms}
            onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
            required
          />
          I agree to the terms and conditions
        </label>
        {errors.agreedToTerms && <span>{errors.agreedToTerms}</span>}

        {/* Submit button */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
