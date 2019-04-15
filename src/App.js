import React, { Component } from 'react';

import './App.css';
import Card from './Components/Card/Card';
import {randomId} from './utils';
import {initialState} from './constants';
import Stats from './Components/Stats/Stats';
import Layout from './Containers/Layout/Layout';
import Buffs from './Components/Buffs/Buffs';

let activePlayer = {
  id: randomId(),
  name: "Plz select a player",
  initiative: 20,
  hitpoints: 100,
  active: true,
  strenght: 10,
  dexterity: 10,
  constitution: 10,
  intelligence: 10,
  wisdom: 10,
  charisma: 10,
  buffs: [],
  basestrenght: 10,
  baseDexterity: 12,
  baseConstitution: 13,
  baseIntelligence: 11,
  baseWisdom: 10,
  baseCharisma: 10,
};

class App extends Component {
  state = {
    elements: initialState,
  };

  updateStats = () => {
    const elementsId = [];
    this.state.elements.map(e => e.findIndex(el => {
      return elementsId.push(el.id);
    }));
    const elements = [...this.state.elements];
    console.log(elementsId);
    for (let el in elementsId) {
      console.log(el);
    };
    this.setState( {
      elements: elements
    })
  }
  
  updateName = (event, id) => {
    const elementIndex = this.state.elements.findIndex(el => {
      return el.id === id
    });
    const element = {...this.state.elements[elementIndex]};
    element.name = event.target.value;
    const elements = [...this.state.elements];
    elements[elementIndex] = element;
    this.checkIfActivePlayer(element);
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
    this.checkIfActivePlayer(element); // useless now maybe if initiative will render at Stats component
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
    this.checkIfActivePlayer(element);
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
// addCard needs update to coresponce to new State
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

  removeElementBuff = (event, id) => {
    const elementIndex = this.state.elements.findIndex(el => {
      return el.id === id
    });
    const element = {...this.state.elements[elementIndex]};
    element.buffs = element.buffs.filter(e => e.name!==event.target.textContent);   
    const elements = [...this.state.elements];
    elements[elementIndex] = element;
    this.checkIfActivePlayer(element);
    this.setState( {
      elements: elements
    });
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
    const element = {...this.state.elements[elementIndex]};
    element.active = true;      // this has to be fail practice
    const elements = [...this.state.elements];
    elements[elementIndex] = element;
    activePlayer = element;
    this.setState({
      elements: elements
    })
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

  checkIfActivePlayer = (element) => {
      if (element.id === activePlayer.id) {
        activePlayer = element;
      }
  }

  sortActivePlayerWithLevels = () => {
    activePlayer.buffs.sort((l, r) => r.casterLvl - l.casterLvl);
    this.forceUpdate();
  }


  //checkifActive player changes so that Stats and buffs to refresh

  render() {
    return (
        <Layout>
          <div className={"Buttons-container"}>
          <button onClick={this.addCard}>Add Character</button>
          <button>Import A Character (TbF)</button>
          <button>Undo (TbF)</button>
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
              clickBuffs={() => this.updateStats()}
              clickStats={() => this.activePlayerProp(element.id)}
            />
            )} 
          </div>
          <Stats 
              activePlayer= {activePlayer}
          />
          <Buffs
            sortElementsWithLevel={() => this.sortActivePlayerWithLevels()}
            name="caster Level"
            activePlayer= {activePlayer}
            clickBuff={(event) => this.removeElementBuff(event, activePlayer.id)}
          />
        </Layout>    
    );
  }
}

export default App;
