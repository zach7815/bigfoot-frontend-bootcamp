import React, {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import states from '../../utils/states';

const FilterForm = ()=>{

  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


    return(
         <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>

         <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
         <InputLabel id="demo-simple-select-label">State</InputLabel>
         <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={states}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="States" />}
    />
      </FormControl>
        </Box>
    )
}

export default FilterForm