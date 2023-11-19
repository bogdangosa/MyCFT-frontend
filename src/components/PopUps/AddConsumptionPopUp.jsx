import React, { useState } from 'react';
import './AddConsumptionPopUp.css';
import SimpleInput from '../FormElements/SimpleInput';
import PopUpContainer from '../Containers/PopUpContainer';
import SimpleButton from '../Buttons/SimpleButton';
import { getCurrentFormattedDate } from '../../utils/getCurrentFormattedDate';
import axios from 'axios';
import { useUserContext } from '../../contexts/UserContext';

const AddConsumptionPopUp = ({close,tracker}) => {
    const [value,setValue] = useState("");
    const user = useUserContext();

    const sendTracker = async ()=>{
      console.log(user);
        const end_date = getCurrentFormattedDate();
        console.log(tracker);
        const response = await axios.post(`${import.meta.env.VITE_SERVER_ADRESS}/trackers/${user.uid}`,{
            tracker:tracker,
            value:value,
            start_date:end_date,
            end_date:end_date,
        })
        if(response.data=="valid")
            close();
        else
          console.log(response.data);
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
