import React, { Component } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';




const Select = React.forwardRef(({onChange, onBlur, name, label}, ref) => (
    <>
        <label>{label}</label>
        <select name = {name} ref = {ref} onChange={onChange} onBlur={onBlur}>
            <option value="20">20</option>
            <option value="30">30</option>
        </select>
    </>
))


const Select2 =({label,name,register}) => {
    return(
        <>
            <label>{label}</label>
            <select name = {name} {...register(name)} >
                <option value="vegan">Vegan</option>
                <option value="carnivore">Carnivore</option>
            </select>
        </>

)
}
const Input = ({label, register, required}) => (
    <>
        <label>{label}</label>
        <input {...register(label, {required})} />
    </>
);
const Input2 = ({label,register, required}) => {
    return(
        <>
        <label>{label}</label>
            <input
                {...register(label, {required})}
            ></input>
        </>
    )
}

const RegisterExample = () => {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(JSON.stringify(data))
    };
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input label="First Name" register={register} required />
            <Input2 label="Last name" register= {register} required/> 
            <Select2 label="Are you vegan" name="FoodType" register={register} required/> 
            {/* <select name = "FoodType" {...register("FoodType")} >
                <option value="vegan">Vegan</option>
                <option value="carnivore">Carnivore</option>
            </select> */}

            
            <Select label="Age" {...register("Age")} />
            <input type="submit" />
        </form>
    )
}

// function RegisterExample(){
//     const {register, handleSubmit, watch, formState:{errors}} = useForm();
//     const onSubmit = data => console.log(data);

//     console.log(watch("example"));

//     return(
//         <form onSubmit = {handleSubmit(onSubmit)}>
//             <input defaultValue="test" {...register("example")} />
//             <input {...register("exampleRequired", {required: true})} />
//             {errors.exampleRequired && <span>This field is required</span>}

//             <input type="submit" />
//         </form>
//     )
// }

export default RegisterExample
