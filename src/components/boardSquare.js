import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from './square';
import { canMoveKnight, moveKnight } from '../logic/game';
import { ItemTypes } from '../constants/itemTypes';
import { DropTarget } from 'react-dnd';

const squareTarget = {
  drop(props, monitor) {
    moveKnight(props.x, props.y);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class BoardSquare extends Component {
  render() {
    const { x, y, connectDropTarget, isOver } = this.props;
    const black = (x + y)%2 === 1;
    return connectDropTarget(
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}> 
        <Square black={black}>
          {this.props.children}
        </Square>
        {isOver && 
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow'
          }} />
        }
      </div>
    );
  }
}

BoardSquare.PropTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired
}

export default DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare);