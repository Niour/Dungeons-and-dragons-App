import {randomId} from './utils.js';

export const initialState = [{
    id: randomId(),
    name: "Player 1",
    initiative: 20,
    hitpoints: 100,
    active: true,
  }, {
    id: randomId(),
    name: "Player 2",
    initiative: 19,
    hitpoints: 100,
    active: false,
  }, {
    id: randomId(),
    name: "Player 3",
    initiative: 18,
    hitpoints: 100,
    active: false,
  }, {
    id: randomId(),
    name: "Player 4",
    initiative: 17,
    hitpoints: 100,
    active: false,
  }, {
    id: randomId(),
    name: "Player 5",
    initiative: 17,
    hitpoints: 100,
    active: false,
  }]