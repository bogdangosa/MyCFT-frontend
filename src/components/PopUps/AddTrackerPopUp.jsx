import React, { useState } from 'react';
import PopUpContainer from '../Containers/PopUpContainer';
import SimpleButton from '../Buttons/SimpleButton';
import SelectableField from '../FormElements/SelectableField';
import './AddTrackerPopUp.css';
import { useNavigate } from 'react-router-dom';

const AddTrackerPopUp = ({close,openPopUp}) => {
    const [selectedField,setSelectedField] = useState("water");
    const navigate  = useNavigate();

    const AddTracker = ()=>{
        if(selectedField=="car")
            navigate("/Map");
        else if(selectedField=="energy")
          openPopUp("energy");
        else if(selectedField=="water")
          openPopUp("water");
    }

  return (
    <PopUpContainer className="popup-add-tracker flex-start" close={()=>close()}>
        <h3>Choose tracker method</h3>
        <div className="selectable-fileds-container flex-start">
            <SelectableField is_selected={selectedField=="water"} onClick={()=>setSelectedField("water")}>Water consumption</SelectableField>
            <SelectableField is_selected={selectedField=="energy"} onClick={()=>setSelectedField("energy")}>Energy consumption</SelectableField>
            <SelectableField is_selected={selectedField=="car"} onClick={()=>setSelectedField("car")}>Car consumption</SelectableField>

        </div>

        <SimpleButton onClick={()=>AddTracker()}>next</SimpleButton>
    </PopUpContainer>
  );
};




export default AddTrackerPopUp;
