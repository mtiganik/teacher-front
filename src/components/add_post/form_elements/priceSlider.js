import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useFormContext, useController } from 'react-hook-form';

function valuetext(value) {
  return `${value}€`;
}

export default function PriceSlider() {
  const [value, setValue] = React.useState([20, 37]);

  const {field} = useController({name:"priceRange"});

  const handleChange = (event, newValue) => {
    field.onChange(event.target.value)
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}        
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}