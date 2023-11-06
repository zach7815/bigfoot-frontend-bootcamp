import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TextField,
} from '@mui/material';
import { styled } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';

const StyledTable = styled(Table)`
  border-collapse: collapse;
  background-color: #f5f5f5;
`;

const ResultsTable = ({sightingsData}) => {
  const navigate = useNavigate();

  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    setFilteredData(sightingsData);
  }, [sightingsData]);

  const handleClick = async (reportNumber) => {
    try {
      const response = await axios.get(`http://localhost:3000/sightings/${reportNumber}`);
      const data = response.data;
      navigate(`/sightings/${reportNumber}`, { state: data });
    } catch (error) {
      console.error('Error:', error);
    }

  };

  useEffect(()=>{
    console.log(sightingsData)
  })



  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
      <TableContainer component={Paper}>
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Record Added To Database</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sightingsData.map((row)=>{
            return(
            <TableRow key={row.id}>
                  <TableCell>
                    <Link
                      to={`/sightings/${row.id}`}
                      onClick={() => handleClick(row.id)}
                    >
                      {row.id}
                    </Link>
                  </TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.location}</TableCell>
                  <TableCell>{row.createdAt}</TableCell>
                </TableRow>
                )
                }
            )}
          </TableBody>
        </StyledTable>
        <TablePagination
          rowsPerPageOptions={[10, 20, 50]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
  );
};

export default ResultsTable;