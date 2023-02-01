import React from 'react';
import TextField from '@mui/material/TextField';

// We can use inline-style
const style = {
  margin: '1',
};

const FormTextField = ({register, required,id,...restProps}) => {
  

  ( <TextField 
    id = {id}
    {...register(id, {required})}
    sx={{m:1}}
    {...restProps}
  />
)
}

export default FormTextField;
