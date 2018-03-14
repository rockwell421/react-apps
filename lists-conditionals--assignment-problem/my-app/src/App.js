import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangedHandler = (event) => {
    this.setState( {
      userInput: event.target.value
    });
  }

  deleteCharHandler = ( index ) => {
    //need to create an array of characters in order to manipulate
    const text = this.state.userInput.split('');
    text.splice(index, 1); //removes from the array
    const updatedText = text.join(''); //converts array back to a string

    this.setState({userInput: updatedText}) //updates the state in the DOM
  }

  render() {
    //need to create an array of characters
    const charList = this.state.userInput.split('').map((char, index) => {
      return <Char
              character={char}
              key={index}
              clicked={() => this.deleteCharHandler(index)} />
    });

    return (
      <div className="App">
        <hr />
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput} />

        <p>{this.state.userInput}</p>

        <Validation
        inputLength={this.state.userInput.length} />

        {charList}

      </div>
    );
  }
}

export default App;
