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

    const style = {
      fontSize: '16px',
      backgroundColor: 'transparent',
      border: '1px solid black',
      padding: '0.5rem',
      textAlign: 'center',
      marginBottom: '2rem',
    }

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
      style.backgroundColor = 'black';
      style.color = 'white';

    }

    //dynamically changing styles
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold'); //classes=['red','bold'];
    }


    return (
        <div className="App">
          <h1> Hi, Im a React app </h1>
          <p className={classes.join(' ')}>Oh snap this works!</p>
          <button
            style={style}
            className="Change-Button"
            style={style}
            onClick={this.togglePersonsHandler}>Switch Name
          </button>
          {persons}
        </div>
    );
  }
}

export default App;
