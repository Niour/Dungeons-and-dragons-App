import React, { Component } from 'react';

import './App.css';
import Card from './Components/Card/Card';
import {randomId} from './utils';
import {initialState, bonusesTypes, bonusesNames } from './constants';
import Stats from './Components/Stats/Stats';
import Layout from './Containers/Layout/Layout';
import Buffs from './Components/Buffs/Buffs';
import core from './core';

let buffCasterLevel;    // This one also
let activePlayer = {   // Maybe we should move this to our state, idk why i did this at first place
  id: randomId(),
  name: "Plz select a player",
  initiative: 20,
  hitpoints: 100,
  active: true,
  strength: 10,
  dexterity: 10,
  constitution: 10,
  intelligence: 10,
  wisdom: 10,
  charisma: 10,
  buffs: [],
  baseStrength: 10,
  baseDexterity: 10,
  baseConstitution: 10,
  baseIntelligence: 10,
  baseWisdom: 10,
  baseCharisma: 10,
  upgrades: [],
  fort: 0,
  ref: 0,
  will: 0,
  baseFort: 0,
  baseRef: 0,
  baseWill: 0,
  attackRoll: 0,
  Bab: 0,
  baseAttackBab: 0,
  size: "Medium",
  NegativeLevels: 1,
  damage: 0,
  grapple: 0,
  ac: 0,
  baseAc: 10,
  touchAcL: 0,
  flatfoodedAc: 0,
};

class App extends Component {
  state = {
    elements: initialState,
    showExtras: true
  };

  updateStats = () => {
    const elements = [...this.state.elements];
    this.resetStats();
    let BuffModification = [];
    // edw ftiaxnw ena Array boithitiko pou tha exei mazemena ta stats pou kerdizei o kathe paiktis
    this.pushBuffs(elements, BuffModification);
    this.pushNegativeLevels(elements, BuffModification);
    this.pushsize(elements, BuffModification);
    console.log("BuffModification: ", BuffModification);
    let elementIndex = 0;
    bonusesTypes.forEach( e => {               // gia kathe Type  enchantment eg
      bonusesNames.forEach ( el => {           // gia kathe stat
        BuffModification.forEach ( ele => {    // gia kathe paikth
          let i = 0;
          let k = 0;
          ele.values.forEach( elem => {
              if ( elem.name === el && elem.type === e ) {
                if ( e !== "circumstance" && e !=="untyped" && e !== "dodge" && elem.value > i) {
                  i = elem.value;
                  elementIndex = elements.findIndex(eleme => {
                    return eleme.id === ele.playerId
                  });
                  elements[elementIndex][el] = elements[elementIndex][el] + i;
              } else if ( e === "circumstance" || e === "untyped" || e=== "dodge") {
                k = k + elem.value;
                elementIndex = elements.findIndex(eleme => {
                  return eleme.id === ele.playerId
                });
                elements[elementIndex][el] = elements[elementIndex][el] + k;
              } 
          }
        })
      })
    })
    this.setState( {
      elements: elements
    })   
    this.forceUpdate();
  })
}

  pushBuffs = (elements, BuffModification) => {
    let testArray = null; // isws mporei na bgei to test array, as to afisoume mipws ginei kamia allagi pio meta
    elements
    .forEach(player => {
      testArray = {playerId: player.id, values: []}; 
      player.buffs                   // gia kathe buff tou player
        .map(bf => { return core          // gia kathe buff tou core
          .find( coreBuff => { return coreBuff.values    // gia kathe value tou coreBuffs.values
            .forEach ((oneValue) => {
              if (coreBuff.name === bf.name) {
                testArray.values.push({name: oneValue.name, type: oneValue.type, value: oneValue.value(bf.casterLvl)})
              }
            });
          });
        });
      BuffModification.push(testArray);
      testArray = null; 
    });
  }

  pushNegativeLevels = (elements, BuffModification) => {
    elements
    .forEach(player => { // gia ton kathe paikti
      if (player.NegativeLevels > 0) {
        BuffModification[BuffModification
            .findIndex( element => {return element.playerId === player.id})].values
                .push(
                  {name: "attack", type: "negative Level", value: player.NegativeLevels * (-1)},
                  {name: "skill checks", type: "negative Level", value: player.NegativeLevels * (-1)},
                  {name: "ability checks", type: "negative Level", value: player.NegativeLevels * (-1)},
                  {name: "fort", type: "negative Level", value: player.NegativeLevels * (-1)},
                  {name: "ref", type: "negative Level", value: player.NegativeLevels * (-1)},
                  {name: "caster Lvl", type: "negative Level", value: player.NegativeLevels * (-1)},
                  {name: "will", type: "negative Level", value: player.NegativeLevels * (-1)}
                )
            }});
  }

  pushsize = (elements, BuffModification) => {
    elements
    .forEach(player => { // gia ton kathe paikti
      let sizeModifier = null;
      if (player.size !== "Medium") {
        switch (player.size) {
          case "Fine":
            sizeModifier = {attackAndAc: 8, specialModifier: -16};
            break;
          case "Diminutive":
            sizeModifier = {attackAndAc: 4, specialModifier: -12};
            break;
          case "Tiny":
            sizeModifier = {attackAndAc: 2, specialModifier: -8};
            break;
          case "Small":
            sizeModifier = {attackAndAc: 1, specialModifier: -4};
            break;
          case "Large":
            sizeModifier = {attackAndAc: -1, specialModifier: 4};
            break;
          case "Huge":
            sizeModifier = {attackAndAc: -2, specialModifier: 8};
            break;
          case "Gargantuan":
            sizeModifier = {attackAndAc: -4, specialModifier: 12};
            break;
          case "Colossal":
            sizeModifier = {attackAndAc: -8, specialModifier: 16};
            break;
          default:
            sizeModifier = {attackAndAc: 0, specialModifier: 0};
            break;
        }
        BuffModification[BuffModification
            .findIndex( element => {return element.playerId === player.id})].values
                .push(
                  {name: "attack", type: "size", value: sizeModifier.attackAndAc},
                  {name: "Ac", type: "size", value: sizeModifier.attackAndAc},
                  {name: "grapple", type: "size", value: sizeModifier.specialModifier}
                )
            }});
  }

  resetStats = () => {
    const elements = [...this.state.elements];
    elements.forEach((e) => {
      e.strength = e.baseStrength;
      e.dexterity = e.baseDexterity;
      e.constitution = e.baseConstitution;
      e.intelligence = e.baseIntelligence;
      e.wisdom = e.baseWisdom;
      e.charisma = e.baseCharisma;
      e.fort = e.baseFort;
      e.ref = e.baseRef;
      e.will = e.baseWill;
    })
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

  updateNegativeLevels = (event, id) => {
    const elementIndex = this.state.elements.findIndex(el => {
      return el.id === id
    });
    const element = {...this.state.elements[elementIndex]};
    element.NegativeLevels = Number(event.target.value);
    const elements = [...this.state.elements];
    elements[elementIndex] = element;
    this.checkIfActivePlayer(element);
    this.setState( {
      elements: elements
    });
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
        strength: 10,
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

  updateBuffCasterLevel = (event) => {
    buffCasterLevel = Number(event.target.value);
  }

  addElementBuff = (event, id) => {
    const playerIndex = this.state.elements.findIndex(pl => {
      return pl.id === id
    });
    const buffIndex = core.findIndex(el => {
      return el.name === event.target.textContent
    });
    const player = {...this.state.elements[playerIndex]};
    console.log(buffIndex);
    if (buffIndex !== -1) {  // this is a fix for an issue if buff was not clicked right at the text
    player.buffs.push(  Object({name: core[buffIndex].name,
      casterLvl: buffCasterLevel,
      type: core[buffIndex].type,
      class: core[buffIndex].class,
      duration: core[buffIndex].Duration,
      spellLvl: core[buffIndex].level})
      ); //{name: "Cats Grace", casterLvl: 5, type: "Cleric", duration: "MIN/LVL"}, 
    const elements = [...this.state.elements];
    elements[playerIndex] = player;
    this.checkIfActivePlayer(player);
    this.setState( {
      elements: elements
    });}
  }

  updateSize = (event, id) => {
    const elementIndex = this.state.elements.findIndex(el => {
      return el.id === id
    });
    const element = {...this.state.elements[elementIndex]};
    console.log(event.target.textContent);
    if (event.target.textContent.length < 11) {
      element.size = event.target.textContent;
      const elements = [...this.state.elements];
      elements[elementIndex] = element;
      this.checkIfActivePlayer(element);
      this.setState( {
        elements: elements
      });
  }
  };

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

  showExtrasHandler = () => {
    console.log("inside showExtrasHandler");
    this.setState( {
      showExtras: !this.state.showExtras
    })
  }

  render() {
    return (
          <Layout >
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
              onNegativeLevelsChange={(event) => this.updateNegativeLevels(event, activePlayer.id)}
              clickAddSize={(event) => this.updateSize(event, activePlayer.id)}
              clickShowExtras= {(event) => this.showExtrasHandler(event)}
              showExtras= {this.state.showExtras}
          />
          <Buffs
            sortElementsWithLevel={() => this.sortActivePlayerWithLevels()}
            name="caster Level"
            activePlayer= {activePlayer}
            clickBuff={(event) => this.removeElementBuff(event, activePlayer.id)}
            clickAddBuff={(event) => this.addElementBuff(event, activePlayer.id)}
            updateBuffCasterLevel={(event) => this.updateBuffCasterLevel(event)}
          />
      </Layout>
    );
  }
}

export default App;
