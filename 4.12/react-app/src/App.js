import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    }

    this.update = this.update.bind(this);
  }

  update() {
    this.setState({val: this.state.val + 1})
  }

  componentWillMount() {
    console.log('componentWillMount');
    this.setState({
      m: 2
    })
  }

  componentDidMount() {
    console.log('componentDidMount');
    // console.log(ReactDOM.findDOMNode(this));
    this.inc = setInterval(this.update, 500);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.inc);
  }

  render() {
    console.log('render');
    return <button onClick={this.update}>
      {this.state.val * this.state.m}
    </button>
  }
}

class Wrapper extends React.Component {
  mount() {
    ReactDOM.render(<App/>, document.getElementById('a'))
  }

  unMount () {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }

  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mout</button>
        <button onClick={this.unMount.bind(this)}>Unmount</button>
        <div id="a"></div>
      </div>
    )
  }
}

export default Wrapper
