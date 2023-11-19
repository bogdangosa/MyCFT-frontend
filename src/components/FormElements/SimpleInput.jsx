import React, { useState } from 'react';
import './SimpleInput.css';

const SimpleInput = ({ type,label, value ,setValue,unit,placeholder}) => {

    return (
        <div className='simple-input-container flex-center'>
            {label && <label className='simple-input-label'>{label}</label>}
            <input className='simple-input' type={type} placeholder={placeholder} value={value} onChange={setValue} />
            <p className='unit-value'>{unit}</p>
        </div>
    );
};

export default SimpleInput;
