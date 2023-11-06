import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Title from '../atoms/styledH1';
import StyledH2 from '../atoms/styledH2';
import SightingCard from '../molecules/SightingCard';
import axios from 'axios';
import LinearIndeterminate from '../atoms/LoadingProgress';
import OverlayWrapper from '../atoms/fullscreenOverlay';
import { Button } from '@mui/material';


const SightingDetails = () => {
  const { reportNumber } = useParams();
  const [incident, setIncident] = useState(null);
  const navigate =useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/sightings/${reportNumber}`);
        const {data}=response.data;

        setIncident(data); // Store the retrieved data in state

      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };


    fetchData();
  }, [reportNumber]);

  if (!incident) {
    return <OverlayWrapper> <LinearIndeterminate/></OverlayWrapper>
  }

  return (
    <div style={{ display: "flex", justifyContent: 'center', flexDirection:"column"}}>
      <SightingCard>
        <Title>Case {incident.REPORT_NUMBER}</Title>
        <StyledH2>Sighting {incident.REPORT_NUMBER} in: {incident.SEASON} {incident.MONTH} {incident.YEAR} in {incident.STATE}, {incident.COUNTY}</StyledH2>
        <h4>Witness Statement</h4>
        <p>{incident.OBSERVED}</p>
      <h4>Additional Details</h4>
      <p>Location Details:{incident.LOCATION_DETAILS}</p>
       <p>Other Witnesses:{incident.OTHER_WITNESSES}</p>
       <p>Time and Conditions:{incident.TIME_AND_CONDITIONS}</p>
       <p>Report Classification: {incident.REPORT_CLASS}</p>
      </SightingCard>
      <div style={{display:"flex", justifyContent:"center", gap:"3rem", marginTop:"2rem"}}>
        <Button variant="contained"  onClick={()=>{
          navigate('/sightings')
        }}> Return to all sightings</Button>
         <Button variant="contained"  onClick={()=>{
          navigate('/')
        }}> Return to Home</Button>
      </div>
    </div>

  );
};

export default SightingDetails;