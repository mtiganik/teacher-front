import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { useFormContext } from 'react-hook-form';

export default function HighestEducation() {
    const [highestDegree, setHighestDegree] = React.useState('');
  
    const handleChange = (event) => {
        setHighestDegree(event.target.value);
    };
    const {register} = useFormContext();

    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel>Kõrgeim haridus</InputLabel>
          <Select
            value={highestDegree}
            {...register("highestDegree", {
              onChange: (e) => handleChange(e)
            })}
          >
                <MenuItem value="basic">Põhiharidus</MenuItem>
                <MenuItem value="high">Keskharidus</MenuItem>
                <MenuItem value="vocational">Kutseharidus</MenuItem>
                <MenuItem value="university">Kõrgharidus</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  }

  