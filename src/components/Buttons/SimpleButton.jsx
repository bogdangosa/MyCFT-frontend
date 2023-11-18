
import React from 'react';
import './SimpleButton.css';

const SimpleButton = ({ children, onClick ,className}) => {
  return (
    <button className={'simple-button '+className} onClick={onClick}>
      {children}
    </button>
  );
};

export default SimpleButton;
