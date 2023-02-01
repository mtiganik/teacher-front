import {Grid, Typography, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import React, { Component } from 'react';
import TeachingTakesPlace from './TeachingTakesPlace';
import HighestEducation from './HighestEducation';
import TeachSubjects from './TeachSubjects';
import DateOfBirth from './DateOfBirth';
import PriceSlider from './priceSlider';
import UploadPhoto from './uploadPhoto'


function AddPost(){
    const {register} = useFormContext();
        return(
            <Grid item md={8} container pl ={1}>
                 <Grid container>
                    <Grid item md={6}>
                    <Typography variant = "h6">Lisage endast pilt</Typography>
                    </Grid>
                    <Grid item md={6}><UploadPhoto/></Grid>
                    </Grid>
                <Grid item xs={12}><Typography  variant = "h6">Isiklikud andmed</Typography></Grid>
                <TextField {...register("firstName")} 
                    required sx={{m:1}}
                    label="Eesnimi"
                />
                <TextField {...register("lastName")} 
                    required sx={{m:1}}
                    label="Perenimi"
                />

                <TextField {...register("email") }
                    label="E-mail" sx={{m:1}}
                />
                <TextField {...register("phone") }
                    label="Telefon" sx={{m:1}}
                />
                 <TextField {...register("languages")}
                    required sx={{m:1}}
                    label="Suhtuskeeled"
                    helperText="nt eesti, inglise (eraldage komaga)"
                /> 
 
                <Grid item margin={1}>
                <DateOfBirth />
                </Grid>  

                 <Grid item xs={12}><Typography  variant = "h6">Elukäik</Typography></Grid>

                <Typography mt={2}>Teie praegune amet (nt õpilane, üliõpilane, õpetaja, insener vms)</Typography>
                <Grid item xs={12}>
                     <TextField fullWidth {...register("speciality")} 
                        required sx={{m:1}}
                        label="Teie ametikoht"
                    /> 
                </Grid> 

                <Typography my={2}>Teie kõrgeim omandatud haridustase</Typography>
                <Grid item xs={12}>
                    <HighestEducation/>
                </Grid>  

                 <TeachSubjects/>

                <Grid item xs={12}><Typography  variant = "h6">Asukoht</Typography></Grid>

                <Typography mt={2}>Millises piirkonnas/piirkondades olete nõus kontakttunde andma</Typography>
                <Grid item xs={12}>
                    <TextField {...register("location")} 
                        label="Asukoht" sx={{m:1}}
                        helperText="Linn(ad), maakonnad"
                    /> 
                </Grid>
                <Typography mt={2} mr={2}>Kuskohas võiks tundi läbi viia</Typography>
                <TeachingTakesPlace/>

                <Grid item xs={12} margin={1}><Typography mt={2} >Kui palju küsite tasu ühe kontakttunni eest, €</Typography></Grid>
                <Grid item xs={12}><PriceSlider/></Grid>

                <Grid item xs={12} margin={1}><Typography  variant = "h6">Tutvustav tekst</Typography></Grid>
                 <TextField {...register("description")} 
                    required sx={{m:1}}
                    label="Kirjutage endast mõne lausega, millega tegelete ning keda soovite aidata"
                    multiline
                    fullWidth
                    rows={4}
                />  

            </Grid>
            )
    }

export default AddPost

