import React, { Component } from 'react';
import Teacher from './Teacher'

export class Home extends Component {
  //static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <Teacher></Teacher>
      </div>
    );
  }
}
