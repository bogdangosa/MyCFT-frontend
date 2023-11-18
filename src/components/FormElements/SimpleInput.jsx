import React, { useState } from 'react';
import './SimpleInput.css';

const SimpleInput = ({ type,label, value ,setValue}) => {

    return (
        <div className='simple-input-container flex-center'>
            <label className='simple-input-label'>{label}</label>
            <input className='simple-input' type={type} value={value} onChange={setValue} />
        </div>
    );
};

export default SimpleInput;
