import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AlertBox from '../../Components/AlertBox';
import '../../css/admin-panel.css'; // Import CSS file for styling

const AdminPanel = () => {
  const [sellers, setSellers] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Fetch seller data from the API
    const fetchSellers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/sellers/');
        setSellers(response.data);
      } catch (error) {
        console.error('Error fetching sellers:', error);
        setAlertMessage('An error occurred while fetching sellers');
        setShowAlert(true);
      }
    };

    fetchSellers();
  }, []);

  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:4000/api/sellers/approve/${id}`);
      // Update the approved status locally
      setSellers((prevSellers) =>
        prevSellers.map((seller) =>
          seller._id === id ? { ...seller, approved: true } : seller
        )
      );
    } catch (error) {
      console.error('Error approving seller:', error);
      setAlertMessage('An error occurred while approving seller');
      setShowAlert(true);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/sellers/${id}`);
      // Remove the seller locally
      setSellers((prevSellers) =>
        prevSellers.filter((seller) => seller._id !== id)
      );
    } catch (error) {
      console.error('Error rejecting seller:', error);
      setAlertMessage('An error occurred while rejecting seller');
      setShowAlert(true);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <div className="seller-cards">
        {sellers.map((seller) => (
          <div className="seller-card" key={seller._id}>
            <h3>{seller.organizationName}</h3>
            <p>PAN Number: {seller.panNumber}</p>
            <p>GST Number: {seller.gstNumber}</p>
            <p>Email: {seller.email}</p>
            <p>Mobile Number: {seller.mobileNumber}</p>
            <p>Address: {seller.organizationAddress}</p>
            <p>Description: {seller.organizationDescription}</p>
            <p>Bank Details: {seller.bankName}, {seller.accountNumber}, {seller.ifscCode}</p>
            <p>Approved: {seller.approved ? 'Yes' : 'No'}</p>
            <div className="button-container">
              <button onClick={() => handleApprove(seller._id)}>Approve</button>
              <button onClick={() => handleReject(seller._id)}>Reject</button>
            </div>
          </div>
        ))}
      </div>
      {/* Alert Box */}
      {showAlert && (
        <AlertBox
          message={alertMessage}
          onClose={handleCloseAlert}
        />
      )}
    </div>
  );
};

export default AdminPanel;
