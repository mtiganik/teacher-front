import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

function Teacher({data}){

    return(
        <>
            <p>{data.firstName}</p>
            <p>{data.lastName}</p>

        </>
    )
}

export default Teacher