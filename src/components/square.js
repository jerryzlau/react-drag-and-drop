import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Square extends Component {
  render() {
    const { black } = this.props;
    const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black';

    return (
      <div style={{backgroundColor: fill, 
        width: '100%', 
        height: '100%',
        color: stroke}}>
        {this.props.children}
      </div>
    );
  }
}

Square.propType = {
  black: PropTypes.bool
};

export default Square;