import React, { Component } from 'react';
import Teacher from './Teacher'
import { getEnv } from "./../../env"

const baseUrl = getEnv()["API_BASE_URL"]

export function Home() {
    return (
      <div>
        {console.log(baseUrl)}
        <h1>Hello, world!123</h1>
        <Teacher></Teacher>
      </div>
    );
}

