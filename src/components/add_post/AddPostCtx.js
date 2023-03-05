import React, { Component } from 'react';
import AddPost from './form_elements/AddPost'
import { FormProvider, useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

import { getEnv } from "./../../env"


const baseUrl = getEnv()["API_BASE_URL"] + "api/post"

const formDefaultValues= {
    teachSubjects:[{name:'',elementary:false,basic:false,high:false,university:false}],
    picture:''
}


function AddPostWrapper(){
    const methods = useForm(    
        {defaultValues:formDefaultValues
      })

      const onSubmit = (data) => {
        data["priceMin"]=data["priceRange"][0]
        data["priceMax"] = data["priceRange"][1]
        data["picturePath"] = ""
        return fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response;
                console.log(response);
                window.location.reload();
              } else {
               console.log('Somthing happened wrong');
              }
        }).catch(err => err);
        
        console.log(data)
      }
            return(
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <AddPost/>
                        <input type="submit" />
                    </form>
                </FormProvider>
                )
}
    

export class AddPostCtx extends Component{
    render(){

        return(
            <AddPostWrapper/>
        )
    }
}