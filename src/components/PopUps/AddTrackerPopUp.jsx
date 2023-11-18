import React from 'react';
import PopUpContainer from '../Containers/PopUpContainer';
import SimpleButton from '../Buttons/SimpleButton';

const AddTrackerPopUp = ({close}) => {
  return (
    <PopUpContainer close={()=>close()}>
        <h3>Choose tracker method</h3>

        <SimpleButton>next</SimpleButton>
    </PopUpContainer>
  );
};

export default AddTrackerPopUp;
