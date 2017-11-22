import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from './square';
import Knight from './knight';
import { moveKnight, canMoveKnight } from '../logic/game';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BoardSquare from './boardSquare';

class Board extends Component {
  renderSquare(i){
    const x = i % 8;
    const y = Math.floor(i / 8);

    return (
      <div key={i} 
        style={{width: '12.5%', height: '12.5%'}}>
        <BoardSquare x={x}
          y={y}>
          {this.renderPiece(x,y)}
        </BoardSquare>
      </div>
    )
  }

  renderPiece(x, y){
    const [knightX, knightY] = this.props.knightPosition;
    return (x === knightX && y === knightY) ? <Knight /> : null;
  }

  handleSquareClick(toX, toY){
    if(canMoveKnight(toX, toY)) {
      moveKnight(toX, toY);
    }
  }

  render() {
    const squares = []; 
    for(let i = 0; i < 64; i++){
      squares.push(this.renderSquare(i));
    }

    return (
      <div style={{width: '100%',
            height: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            border: '5px solid black'}}>
        {squares}
      </div>
    );
  }
}

Board.propTypes = {
  knightPosition: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired
};

export default DragDropContext(HTML5Backend)(Board);