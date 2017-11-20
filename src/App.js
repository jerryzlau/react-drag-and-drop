import React, { Component } from 'react';
import Board from './components/board';
import { observe } from './logic/game';

export default class App extends Component {

  makeMove(){
    observe(knightPosition => this.render(
      <Board knightPosition={knightPosition} />
    ));
  }
  
  render() {
    const x = Math.floor(Math.random() * 8);
    const y = Math.floor(Math.random() * 8);
    return (
      <input type='button' 
             value='Render Board'
             onClick={this.makeMove} />
    );
  }
}

