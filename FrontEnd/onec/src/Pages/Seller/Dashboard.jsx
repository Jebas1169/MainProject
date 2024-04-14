import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar';

const Dashboard = () => {
  const [sellerData, setSellerData] = useState(null);

  useEffect(() => {
    // Retrieve seller data from session storage
    const storedSellerData = sessionStorage.getItem('sellerData');
    if (storedSellerData) {
      setSellerData(JSON.parse(storedSellerData));
    }
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <Navbar />
      {sellerData && sellerData.existingSeller && ( // Check if sellerData and existingSeller exist
        <div>
          {/* {console.log(sellerData.existingSeller.organizationName)} */}
          <p>Organization Name: {sellerData.existingSeller.organizationName}</p>
          <p>Email: {sellerData.existingSeller.email}</p>
          {/* Display other seller data */}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
