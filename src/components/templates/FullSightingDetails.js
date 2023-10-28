import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Title from '../atoms/styledH1';
import StyledH2 from '../atoms/styledH2';
import SightingCard from '../molecules/SightingCard';

const SightingDetails = () => {
  const location = useLocation();
  const data = location.state;
  const { data: incident } = data;

  useEffect(() => {
    console.log(data);
  }, []);

if(data===null)

  return (
    <div style={{display:"flex", justifyContent:'center'}}>
    <SightingCard>
      <Title>Case {incident.REPORT_NUMBER}</Title>
      <StyledH2>Sighting {incident.REPORT_NUMBER} in : {incident.SEASON} {incident.MONTH} {incident.YEAR} in {incident.STATE}, {incident.COUNTY}</StyledH2>
      <h4>Witness Statement</h4>
      <p>{incident.OBSERVED}</p>
    </SightingCard>


    </div>
  );
};

export default SightingDetails;