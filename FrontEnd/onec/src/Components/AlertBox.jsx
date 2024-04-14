import React from 'react';
import PropTypes from 'prop-types';
import '../css/alert-box.css'; // Import CSS file for styling

const AlertBox = ({ message, onClose, type }) => {
  const alertClass = type === 'error' ? 'error' : 'success';

  return (
    <div className={`alert-box ${alertClass}`}>
      <p>{message}</p>
      <button className="ok-button" onClick={onClose}>OK</button>
    </div>
  );
};

AlertBox.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['error', 'success']),
};

export default AlertBox;
