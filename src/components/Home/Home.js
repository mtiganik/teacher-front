import React, { Component } from 'react';
import Teacher from './Teacher'
import { getEnv } from "./../../env"

const baseUrl = getEnv()["API_BASE_URL"] + "api/post"
//const baseUrl = "https://opetajateapp.azurewebsites.net/api/post"

// async function loadData(){
//   const response = await fetch(baseUrl);

//   const posts = await response.json();
//   console.log(posts);
// }

// loadData();
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
      <>
          {posts.map((item,id) => 
          <Teacher key={item.id} data = {item}/>)
          }      
      </>
  )
}

