import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import getAge from "./../common_components/ageCalculator"
import { Typography, Grid } from '@mui/material';
import EuroIcon from '@mui/icons-material/Euro';
function Teacher({data}){

    return(
        <Grid container spacing={1}  >
            <Grid item border={1} xs = {12} margin={1} padding={0.5} >
                <Typography variant="h5">{data.firstName} {data.lastName} {getAge(data.dateOfBirth)}</Typography>
                <Typography variant="h6">{data.speciality}</Typography>
                <Typography variant="h6"><EuroIcon/>: {data.priceMin} - {data.priceMax}</Typography>
                <Typography variant="h6">{data.location}</Typography>
                <Typography variant="h6">{data.languages}</Typography>

            </Grid>
        </Grid>
    )
}

export default Teacher