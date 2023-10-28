import React, { useContext, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import BigFootContext from "../../SightingsContext";
import axios from 'axios'


const StyledTable = styled(Table)`
  border-collapse: collapse;
  background-color: #f5f5f5;
`;

const ResultsTable = () => {
  const [sightingsData] = useContext(BigFootContext);
  const navigate=useNavigate()

const handleClick = async (reportNumber) => {
  try {
    const response = await axios(`http://localhost:3000/sightings/${reportNumber}`);
    const data = await response.data;

    // Pass the data to the "/sightings/${reportNumber}" route
    navigate(`/sightings/${reportNumber}`, { state: data });
  } catch (error) {
    console.error('Error:', error);
  }
};


  return (
    <TableContainer component={Paper}>
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell>REPORT NUMBER</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Season</TableCell>
            <TableCell>State</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sightingsData?.map((row) => (
            <TableRow key={row.REPORT_NUMBER}>
              <TableCell>
                 <Link to={`/sightings/${row.REPORT_NUMBER}`} onClick={() => handleClick(row.REPORT_NUMBER)}>
        {row.REPORT_NUMBER}
      </Link>
              </TableCell>
              <TableCell>{row.YEAR}</TableCell>
              <TableCell>{row.SEASON}</TableCell>
              <TableCell>{row.STATE}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default ResultsTable;