import React from 'react';
import './StatElement.css';
import { motion } from 'framer-motion';

const StatElement = ({label,icon,percentage,unit}) => {

  const Variants = {
    in: {
        width: `${percentage}%`,
    },
    out: {
        width: 0,
    },
};
const Transition = {
    type: "tween",
    duration:0.4
};

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
            <motion.div
                variants={Variants}
                initial="out"
                animate="in"
                exit="out"
                transition={Transition} 
             className="percentage-bar" style={{'width':`${percentage}%`}}></motion.div>
        </div>
    </div>
  );
};

export default StatElement;
