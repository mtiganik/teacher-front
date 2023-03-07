import React, { Component } from 'react';
import Teacher from './Teacher'
import { getEnv } from "./../../env"
import Grid from '@mui/material/Grid';


const baseUrl = getEnv()["API_BASE_URL"] + "api/post"

export function Home() {
  const [posts, setPosts] = React.useState([])
  React.useEffect(() => {
      fetch(baseUrl)
      .then(response => response.json())
      .then((actualData) => {
        console.log(actualData)
        setPosts(actualData)})
  }, [])
//
  return (
      <Grid container spacing ={1} justifyContent="center">
        <Grid item xs={12} md={8} lg={6}>
          {posts.map((item,id) => 
          <Teacher key={item.id} data = {item}/>)
          }      
        </Grid>
      </Grid>
  )
}

