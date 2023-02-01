import * as React from 'react';
import {FormLabel,FormGroup,FormControlLabel,Checkbox, FormControl} from '@mui/material';
import { useFormContext } from 'react-hook-form';

function TeachingTakesPlace(){
    const {register} = useFormContext()
    return (
        <FormControl>
        <FormGroup aria-label="position" row>
            <FormControlLabel {...register("teachingTakesPlace.studentsPlace")}
                control={<Checkbox />}
                label="Õpilase juures"
            />
            <FormControlLabel {...register("teachingTakesPlace.teachersPlace")}
                control={<Checkbox />}
                label="Õpetaja juures"
            />
            <FormControlLabel {...register("teachingTakesPlace.online")}
                control={<Checkbox />}
                label="Videokõne vahendusel"
            />
            <FormControlLabel {...register("teachingTakesPlace.otherLocation")}
                control={<Checkbox />}
                label="Muu"
            />
        </FormGroup>
    </FormControl>
    )
}

export default TeachingTakesPlace