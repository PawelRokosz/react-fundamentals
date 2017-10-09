import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  render() {
    return <Title text="The text"/>
  }
}

const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTypes = {
  text(props, propName, component) {
    if (!(propName in props)) {
      return new Error(`missing ${propName}`);
    }
    if (props[propName].length < 6) {
      return new Error(`${propName} was to short`)
    }
  }
}

export default App
