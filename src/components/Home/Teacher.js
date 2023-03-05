import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function Teacher({data}){

    return(
        <Grid container spacing={1}  >
            <Grid item border={1} xs = {12} margin={1} padding={0.5} >
                <p>{data.firstName} {data.lastName}</p>
                <p></p>
            </Grid>
        </Grid>
    )
}

export default Teacher