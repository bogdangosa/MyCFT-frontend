
import React from 'react';
import './SimpleButton.css';

const SimpleButton = ({ children, onClick ,className , style}) => {
  return (
    <button className={'simple-button '+className} onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default SimpleButton;
