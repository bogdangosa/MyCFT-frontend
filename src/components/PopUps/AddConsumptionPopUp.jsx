import React, { useState } from 'react';
import './AddConsumptionPopUp.css';
import SimpleInput from '../FormElements/SimpleInput';
import PopUpContainer from '../Containers/PopUpContainer';
import SimpleButton from '../Buttons/SimpleButton';

const AddConsumptionPopUp = ({close,tracker}) => {
    const [value,setValue] = useState("");

    const sendTracker = ()=>{
        console.log(tracker);
    }

  return (
    <PopUpContainer className="popup-add-consumption flex-start" close={()=>close()}>
        <h3>Add {tracker} consumption</h3>
        <SimpleInput type="number" placeholder="Enter consumption" value={value} setValue={(e)=>setValue(e.target.value)}/>
        <SimpleButton onClick={()=>sendTracker()}>next</SimpleButton>
    </PopUpContainer>
  );
};




export default AddConsumptionPopUp;
