import React, { Component } from 'react';
import './App.css';

import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    username: [
      { name: 'Jackie' }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      username: [
        { name: newName }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      username: [
        { name: event.target.value }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Input your name in the box to see it display</h1>
          <UserInput
          onKeyDown={this.switchNameHandler.bind(this)}
          changed={this.nameChangedHandler.bind(this)}
          />
        </div>
        <div>
          <UserOutput
            name={this.state.username[0].name}
            changed={this.nameChangedHandler.bind(this)}
           />
        </div>
      </div>
    );
  }
}

export default App;
