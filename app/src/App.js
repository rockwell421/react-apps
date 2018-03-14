import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'EEE', name: "Max", age: 28 },
      { id: 'FFF', name: "Steffy", age: 27 },
      { id: 'GGG', name: "Mony", age: 21 },
    ],
    otherState: 'Some other value',
    showPersons: false
  }

  //method allows you to manipulate the state of each individual element
  nameChangedHandler = ( event, id ) => {
    //this changes the name, adjusts the name of the user, makes a copy, and renders the list
    const personIndex = this.state.persons.findIndex(p => {
      //finds the person that you are looking for, and holds the id
      return p.id === id;
    });

    //gets access to the person
    const person = {
      ...this.state.persons[personIndex]
    };

    //updates the persons name on the screen
    person.name = event.target.value;

    //updates the array at the position fetched by making a copy and re-assigning its value in memory
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    //updates the state on the client side
    this.setState( {
      persons: persons
    }
  );
}

  //this shows the elements
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState(
      {
        showPersons: !doesShow
      }
    );
  }


    deletePersonHandler = (personIndex) => {
      //updates the state in an immuteable way by making a copy of the original array
      //const persons = this.state.persons.slice(); does the same thing
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
    }

  render() {

    //Displays/hides names
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
              return <Person
                  click={ () => {this.deletePersonHandler(index)}}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  changed={ (event) => this.nameChangedHandler(event, person.id)}
                  />
              })}
        </div>
      );
    }


    return (
      <div className="App">
        <h1> Hi, Im a React app </h1>
        <button
          className="Change-Button"
          onClick={this.togglePersonsHandler}>Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
