import React, { Component } from 'react';

import './App.css';
import Card from './Components/Card/Card';
import {randomId} from './utils';
import {initialState} from './constants';
import Stats from './Components/Stats/Stats';
import Aux from './hoc/Auxialiary';
import Layout from './Containers/Layout/Layout';

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
        strenght: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10,
        buffs: [],
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

  showBuffs = (id) => {
    const elementIndex = this.state.elements.findIndex(el => {
      return el.id === id
    });
    const element = {...this.state.elements[elementIndex]};
    console.log(element.buffs);
  }

  activePlayerProp = (id) => {
    this.deactivateAllPlayers();
    const elementIndex = this.state.elements.findIndex(el => {
      return el.id === id
    });
    console.log(elementIndex);
    const element = {...this.state.elements[elementIndex]};
    element.active = true;      // this has to be fail practice
    const elements = [...this.state.elements];
    console.log(element);
    elements[elementIndex] = element;
    console.log(elements);
    this.setState({
      elements: elements
    })
    console.log(this.state.elements);
  }

  deactivateAllPlayers = () => {
    const elementsId = [];
    this.state.elements.findIndex(el => {
      return elementsId.push(el.id);
    });
    const elements = [...this.state.elements];
    for (let el in elementsId) {
      elements[el].active = false
    };
    this.setState( {
      elements: elements
    })
  }

  render() {
    return (

        <Layout>
          <div className={"Buttons-container"}>
          <button onClick={this.addCard}>Add Character</button>
          <button>Import A Character</button>
          <button>Undo</button>
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
              clickBuffs={() => this.deactivateAllPlayers()}
              clickStats={() => this.activePlayerProp(element.id)}
            />
            )} 
          </div>
          <Stats 
              activePlayer= {{name: "test"}}
          />
        </Layout>    
      
    );
  }
}


export default App;
