
import React from 'react';

const SelectableField = ({children,is_selected}) => {
  return (
    <div className={(is_selected?"selectable-field-selected":"")+' selectable-field'}>
        {children}
    </div>
  );
};

export default SelectableField;
