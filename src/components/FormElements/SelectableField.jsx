
import React from 'react';
import './SelectableField.css';

const SelectableField = ({children,is_selected,onClick}) => {
  return (
    <div className={(is_selected?"selectable-field-selected":"")+' selectable-field'} onClick={()=>onClick()}>
        {children}
    </div>
  );
};

export default SelectableField;
