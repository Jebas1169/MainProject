import React, { useState, useEffect } from 'react';

const AdminPanel = () => {
  const [registrationRequests, setRegistrationRequests] = useState([]);

  useEffect(() => {
    // Fetch registration requests from the database
    // Update the state with fetched data
  }, []);

  const handleApprove = (id) => {
    // Implement approve logic here
  };

  const handleReject = (id) => {
    // Implement reject logic here
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <ul>
        {registrationRequests.map((request) => (
          <li key={request.id}>
            {request.name} - {request.email} 
            <button onClick={() => handleApprove(request.id)}>Approve</button>
            <button onClick={() => handleReject(request.id)}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
