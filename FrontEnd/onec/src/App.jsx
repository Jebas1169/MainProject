// FrontEnd/onec/src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddProduct from './Pages/Seller/AddProduct';
import Complaint from './Pages/Seller/Complaint';
import Dashboard from './Pages/Seller/Dashboard';
import Login from './Pages/Seller/Login';
import Profile from './Pages/Seller/Profile';
import Registration from './Pages/Seller/Registration';
import AdminPanel from './Pages/Seller/AdminPanel';

function App() {
  return (
    <Router>
      <div>
        {/* Define routes for each page component */}
        <Routes>
          {/* Routes for seller */}
          <Route path="/seller/add-product" element={<AddProduct />} />
          <Route path="/seller/complaint" element={<Complaint />} />
          <Route path="/seller/dashboard" element={<Dashboard />} />
          <Route path="/seller/login" element={<Login />} />
          <Route path="/seller/profile" element={<Profile />} />
          <Route path="/seller/registration" element={<Registration />} />

          {/* Routes for seller app admin */}
          <Route path="/seller/admin" element={<AdminPanel />} />

          {/* You can add more routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
