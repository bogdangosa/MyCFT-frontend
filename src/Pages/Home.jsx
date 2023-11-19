import React, { useState } from 'react';
import './Home.css';
import AddTrackerPopUp from '../components/PopUps/AddTrackerPopUp';
import StatElement from '../components/Cards/StatElement';
import AddConsumptionPopUp from '../components/PopUps/AddConsumptionPopUp';
import SimpleButton from '../components/Buttons/SimpleButton';
import { auth } from '../Firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useMyUserUpdate, useUserContext } from '../contexts/UserContext';
import { consumption_data } from '../data/consumption_data';
import BarChart from '../components/Charts/BarChart';
import DoughnutChart from '../components/Charts/DoughnutChart';

const Home = () => {
  const [AddTrackerPopUpState,setAddTrackerPopUpState] = useState(false)
  const [AddConsumptionOf,setAddConsumptionOf] = useState() // ["water","energy"]
  const navigate = useNavigate();
  const updateUser = useMyUserUpdate();
  const user = {
    name: 'Bogdan',
    email: 'bogdan.gosa@gmail.com',
    car_consumption: 15,
    water_consumption: 70,
    energy_consumption: 23,
  }
  const [ConsumptionChart,setConsumtionChart] = useState({
    labels: consumption_data?.map((day_consumption)=>day_consumption.day),
    datasets:[{
        label:"Consumption",
        data: consumption_data.map((day_consumption)=>day_consumption.value),
        backgroundColor: ["#4CA488"],
        barPercentage:0.5,
        hoverBackgroundColor:["#333"]
    }],
  });
  const [DoughnutChartDataValue,setDoughnutChartDataValue] = useState({
    labels: ['Water','Energy','Car'],
    datasets:[{
        label:"Total Consumption",
        data: [user.water_consumption,user.energy_consumption,user.car_consumption],
        backgroundColor: ["#4CA488","#ED4C86","#4C52ED"],
    }],
  });
  const user2 = useUserContext();

  const logOut = ()=>{
    signOut(auth).then(()=>{
      updateUser("no user")
      navigate("/Login")
    })
  }

  return (
    <div className='home container'>
        <section className="top-hero-container flex-start">
          <div className="container-text-top flex-start">
            <h1 className='c-text1'>Hey {user2?.name},</h1>
            <p className='c-text2 description'>Take charge of your environmental impact with personalized insights and easy-to-use trackers</p>
            <div className="arrow-link c-primary flex-start" onClick={()=>setAddTrackerPopUpState(true)}>
              <p>Add tracker</p>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_18_85)"> <path d="M8.63204 5.44164C8.74908 5.32445 8.81482 5.1656 8.81482 4.99997C8.81482 4.83435 8.74908 4.67549 8.63204 4.55831L6.27537 2.20039C6.15812 2.08314 5.9991 2.01727 5.83329 2.01727C5.66747 2.01727 5.50845 2.08314 5.3912 2.20039C5.27395 2.31764 5.20809 2.47666 5.20809 2.64247C5.20809 2.80829 5.27395 2.96731 5.3912 3.08456L6.6812 4.37497H1.87495C1.70919 4.37497 1.55022 4.44082 1.43301 4.55803C1.3158 4.67524 1.24995 4.83421 1.24995 4.99997C1.24995 5.16573 1.3158 5.3247 1.43301 5.44192C1.55022 5.55913 1.70919 5.62497 1.87495 5.62497H6.6812L5.3912 6.91497C5.33315 6.97303 5.2871 7.04195 5.25568 7.1178C5.22426 7.19366 5.20809 7.27495 5.20809 7.35706C5.20809 7.43916 5.22426 7.52046 5.25568 7.59631C5.2871 7.67216 5.33315 7.74109 5.3912 7.79914C5.44926 7.8572 5.51818 7.90325 5.59403 7.93467C5.66988 7.96609 5.75118 7.98226 5.83329 7.98226C5.91539 7.98226 5.99669 7.96609 6.07254 7.93467C6.14839 7.90325 6.21731 7.8572 6.27537 7.79914L8.63204 5.44164Z" fill="#4CA488"/> </g> <defs> <clipPath id="clip0_18_85"> <rect width="10" height="10" fill="white" transform="matrix(0 1 -1 0 10 0)"/> </clipPath> </defs> </svg>
            </div>
          </div>
          <div className="doughnut-chart-container">
          <DoughnutChart data={DoughnutChartDataValue}/>
        </div>
        </section>
      <section className="stats-section flex-start">
        <StatElement label="Energy" percentage={user.energy_consumption} icon={<img src='./energy-icon.svg'/>} unit={user.energy_consumption +" kg CO2"}/>
        <StatElement label="Water" percentage={user.water_consumption} icon={<img src='./water-icon.svg'/>} unit={user.water_consumption +" kg CO2"}/>
        <StatElement label="Car" percentage={user.car_consumption} icon={<img src='./travel-icon.svg'/>} unit={user.car_consumption +" kg CO2"}/>
      </section>

        <div className="period-container">

        </div>

        <div className="bar-chart-container">

          <BarChart data={ConsumptionChart}/>
        </div>
      <SimpleButton style={{marginTop:"1rem"}} onClick={()=>logOut()}>log out</SimpleButton>

      {AddConsumptionOf!=undefined && <AddConsumptionPopUp tracker={AddConsumptionOf} close={()=>setAddConsumptionOf(undefined)}/>}
      {AddTrackerPopUpState && <AddTrackerPopUp openPopUp={(type)=>{setAddConsumptionOf(type);setAddTrackerPopUpState(false)}} close={()=>setAddTrackerPopUpState(false)}/>} 

    </div>
  );
};

export default Home;
