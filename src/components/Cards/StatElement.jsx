import React from 'react';
import './StatElement.css';

const StatElement = ({label,icon,percentage,unit}) => {
  return (
    <div className='stat-element'>
        <div className="top-bar flex-space-between">
            <div className="label-container flex-start">
                <div className="icon">{icon}</div>
                <p className="label c-text1">{label}</p>
            </div>
            <div className="unit c-text2">{unit}</div>
        </div>
        <div className="percentage-bar-container">
            <div className="percentage-bar" style={{'width':`${percentage}%`}}></div>
        </div>
    </div>
  );
};

export default StatElement;
