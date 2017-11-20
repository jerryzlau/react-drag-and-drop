import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Board from './components/board';
import { observe } from './logic/game';

observe(knightPosition => 
  ReactDOM.render(
    <Board knightPosition={knightPosition} />,
  document.getElementById('root')
  )
);
