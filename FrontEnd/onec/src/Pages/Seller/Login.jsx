import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../css/seller/login.css'; // Import CSS file for styling

const Login = () => {
  const [formData, setFormData] = useState({ panNumber: '', password: '' });
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form data
    if (!formData.panNumber || !formData.password) {
      setAlertMessage('Please fill in all fields');
      setShowAlert(true);
      return;
    }
    try {
      // Post data to API endpoint
      const response = await axios.post('http://localhost:4000/api/sellers/login', formData);
      console.log(response.data);
      // Handle successful login (redirect, etc.)
      console.log("response")
      console.log(response);
      // Store session data in session storage
      sessionStorage.setItem('sellerData', JSON.stringify(response.data));
      setAlertMessage('Login successful');
      setShowAlert(true); // <-- Show alert for successful login too
      setTimeout(() => {
        navigate('/seller/dashboard');
      }, 1000);
    } catch (error) {
      console.error('Login failed:', error);
      if (error.response && error.response.status === 400) {
        setAlertMessage(error.response.data.error); // Display error message from backend
      } else {
        setAlertMessage('An error occurred while logging in. Please try again later.');
      }
      setShowAlert(true);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="login-container">
      <h2>Seller Login</h2>
      <form onSubmit={handleSubmit}>
        {/* PAN */}
        <label>
          PAN:
          <input
            type="text"
            name="panNumber"
            value={formData.pan}
            onChange={handleChange}
            required
          />
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
        </label>
        <button type="submit">Login</button>
      </form>
      {/* Alert Box */}
      {showAlert && (
        <div className="alert-box">
          <p>{alertMessage}</p>
          <button onClick={handleCloseAlert}>OK</button>
        </div>
      )}
    </div>
  );
};
3
export default Login;
