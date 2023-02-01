import React from 'react';
import Grid from '@mui/material/Grid';
import {FormControlLabel,Checkbox, FormGroup} from '@mui/material';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { FormProvider, useFieldArray, useFormContext } from 'react-hook-form';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';


function TeachSubjects() {
  const {control, register } = useFormContext(
  );
  const {append, remove, fields } = useFieldArray({
    control,
    name: 'teachSubjects'
  });

  return (
    <>
      <Grid item md={12}>
        <Typography mt={2} variant="h6">
          Õppeained

        </Typography>
      </Grid>
      <Grid item md={12}>
        <Typography gutterBottom>
          Kirjutage lahtrisse õppeaine ning seejärel valige millisel tasemel soovite antud õppeainet õpetada
        </Typography>
      </Grid>

        {fields.map((item, index) => (
          <Grid key={index} sx={{my:2}}>
            <Grid container>
              <FormProvider >
                <Grid >
                  <TextField  {...register(`teachSubjects.${index}.name`)} sx={{mr:2}}
                    label = {"Õppeaine " + (index + 1)}
                  />
                </Grid>
                <FormControlLabel {...register(`teachSubjects.${index}.elementary`)} control={<Checkbox />} label="Algkool" />
                <FormControlLabel {...register(`teachSubjects.${index}.basic`)} control={<Checkbox/>} label="Põhikool" />
                <FormControlLabel {...register(`teachSubjects.${index}.high`)} control={<Checkbox />} label="Keskkool" />
                <FormControlLabel {...register(`teachSubjects.${index}.university`)} control={<Checkbox />} label="Kõrgkool" />

                {index > 0 && (
                  <Grid item md={2} >
                    <Button variant="text" color="primary" startIcon={<DeleteIcon />} onClick={() => remove(index)}>
                      Kustuta
                    </Button>
                  </Grid>)}
              </FormProvider>
            </Grid>
            <Divider />
          </Grid>
        ))}
      <Grid item md={12}>
        <Button variant="text" color="primary" startIcon={<AddIcon />} onClick={() => append()} >
          Lisa veel
        </Button>
      </Grid> 
     
    </>
  )
}

export default TeachSubjects;
