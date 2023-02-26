import React, { Component } from 'react';
import Teacher from './Teacher'
import { getEnv } from "./../env"


export function Home() {
    return (
      <div>
        {console.log(getEnv())}
        <h1>Hello, world!123</h1>
        <Teacher></Teacher>
      </div>
    );
}

