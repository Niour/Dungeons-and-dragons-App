import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card.js';
import {randomId} from './utils.js';
import {initialState} from './constants.js';
import Stats from './Stats/Stats.js'; 

class App extends Component {
  state = {
    elements: initialState,
  };

  updateName = (event, id) => {
    const elementIndex = this.state.elements.findIndex(el => {
      return el.id === id
    });
    const element = {...this.state.elements[elementIndex]};
    element.name = event.target.value;
    const elements = [...this.state.elements];
    elements[elementIndex] = element;
    this.setState( {
      elements: elements
    })
  };

  updateInitiative = (event, id) => {
    clearTimeout(this.timeout_);
    const elementIndex = this.state.elements.findIndex(el => {
      return el.id === id
    });
    const element = {...this.state.elements[elementIndex]};
    element.initiative = Number(event.target.value);
    const elements = [...this.state.elements];
    elements[elementIndex] = element;
    this.setState({ elements: elements })
    this.timeout_ = setTimeout( () => this.sortElements(), 500);
  }

  updateHitpoints = (event, id) => {
    const elementIndex = this.state.elements.findIndex(el => {
      return el.id === id
    });
    const element = {...this.state.elements[elementIndex]};
    element.hitpoints = Number(event.target.value);
    const elements = [...this.state.elements];
    elements[elementIndex] = element;
    this.setState( {
      elements: elements
    })
  };

  sortElements() {
    const {elements} = this.state;
    this.setState({
    elements: elements.sort((l, r) => r.initiative - l.initiative)
    });
  }

  addCard = () => {
    const {elements} = this.state;
    elements[elements.length] = {
        id: randomId(),
        name: `Player ${elements.length +1}`,
        initiative: 10,
        hitpoints: 100,
    };
    this.setState({
    elements: elements.sort((l, r) => r.initiative - l.initiative)
  }
  )}

  removeElement = (id) => {
    let {elements} = this.state;
    elements = elements.filter(el => el.id !== id); // performace*
    this.setState ({elements});
  }


  
  render() {
    return (
      <div className={"Main-container"}>
        <div className={"Buttons-container"}>
        <button onClick={this.addCard}>Add Character</button>
        <button>Import A Character</button>
        </div>
        <div className={"Cards-container"}>
          {this.state.elements.map(element => 
          <Card
            name={element.name}
            initiative={element.initiative}
            hitpoints={element.hitpoints}
            key={element.id}
            id={element.id}
            onNameChange={(event) => this.updateName(event, element.id)}
            onInitiativeChange={(event) => this.updateInitiative(event, element.id)}
            onHitpointsChange={(event) => this.updateHitpoints(event, element.id)}
            onRemove={() => this.removeElement(element.id)}
          />
          )}
          </div>
          <Stats
         //   name={this.state.}
          >

          </Stats>
          
      </div>
    );
  }
}

export default App;
