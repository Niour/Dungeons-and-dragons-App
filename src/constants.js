import {randomId} from './utils.js';

export const initialState = [{
    id: randomId(),
    name: "Player 1",
    initiative: 20,
    hitpoints: 100,
    active: true,
    strenght: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
    buffs: ["mage armor"],
  }, {
    id: randomId(),
    name: "Player 2",
    initiative: 19,
    hitpoints: 100,
    active: false,
    strenght: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
    buffs: ["mage armor"],
  }, {
    id: randomId(),
    name: "Player 3",
    initiative: 18,
    hitpoints: 100,
    active: false,
    strenght: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
    buffs: ["mage armor"],
  }, {
    id: randomId(),
    name: "Player 4",
    initiative: 17,
    hitpoints: 100,
    active: false,
    strenght: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
    buffs: ["cats Grace"],
  }, {
    id: randomId(),
    name: "Player 5",
    initiative: 17,
    hitpoints: 100,
    active: false,
    strenght: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
    buffs: ["bulls strenght"],
  }]