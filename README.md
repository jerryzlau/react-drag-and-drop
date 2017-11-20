# React Drag and Drop 
Used [react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate)

# Styling tricks 

flex-wrap property specifies whether flex items are 
```css
flex-wrap: wrap;
```

# Frontend React input validation
[PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
```javascript
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Example extends Component {
  render(){
  
  }
}

Example.propType = {
  yes: PropTypes.bool,
  name: PropTypes.string,
  age: PropTypes.number,
  yell: PropTypes.func
}
```
