import {randomId} from './utils.js';

export const initialState = [{
    id: randomId(),
    name: "Player 1",
    initiative: 20,
    hitpoints: 100,
    active: true,
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
    buffs: [{name: "Cats Grace", casterLvl: 5, type: "Cleric"}, {name: "Bears Endurance", casterLvl: 10, type: "Cleric"}, {name: "Test Lesser Transformation", casterLvl: 15, type: "Cleric"},{name: "Fatigue", casterLvl: 99, type: "Debuff"}],
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
    baseAttackBab: 0,
  }, {
    id: randomId(),
    name: "Player 2",
    initiative: 19,
    hitpoints: 100,
    active: false,
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 12,
    wisdom: 12,
    charisma: 9,
    buffs: [{name: "mage armor", casterLvl: 20, type: "Cleric"},{name: "Fatigue", casterLvl: 99, type: "Debuff"}],
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
    baseAttackBab: 0,
  }, {
    id: randomId(),
    name: "Player 3",
    initiative: 18,
    hitpoints: 100,
    active: false,
    strength: 10,
    dexterity: 16,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
    buffs: [{name: "mage armor", casterLvl: 20, type: "Cleric"}],
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
    baseAttackBab: 0,
  }, {
    id: randomId(),
    name: "Player 4",
    initiative: 17,
    hitpoints: 100,
    active: false,
    strength: 15,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
    buffs: [{name: "Cats Grace", casterLvl: 10, type: "Cleric"}, {name: "False Life", casterLvl: 3, type: "Cleric"}],
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
    baseAttackBab: 0,
  }, {
    id: randomId(),
    name: "Player 5",
    initiative: 17,
    hitpoints: 100,
    active: false,
    strength: 12,
    dexterity: 10,
    constitution: 18,
    intelligence: 16,
    wisdom: 10,
    charisma: 10,
    buffs: [{name: "Cats Grace", casterLvl: 5, type: "Cleric"}, {name: "Bears Endurance", casterLvl: 10, type: "Cleric"}, {name: "Test Lesser Transformation", casterLvl: 15, type: "Cleric"}],
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
    baseAttackBab: 0,
  }];

  export const bonusesTypes = ["enchancement", "racial","untyped"];
  export const bonusesNames = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];