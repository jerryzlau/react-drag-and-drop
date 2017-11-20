import React, { Component } from 'react';
import Board from './components/board';

export default class App extends Component {
  render() {
    const x = Math.floor(Math.random() * 8);
    const y = Math.floor(Math.random() * 8);
    return <Board knightPosition={[x,y]} />;
  }
}

{/* <Board knightPosition={[7,4]} /> */}