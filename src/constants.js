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
    buffs: [{name: "Cats Grace", casterLvl: 5, type: "Cleric", duration: "MIN/LVL"}, 
            {name: "Bears Endurance", casterLvl: 10, type: "Cleric", duration: "MIN/LVL"},
            {name: "Test Lesser Transformation", casterLvl: 15, type: "Cleric", duration: "MIN/LVL"},
            {name: "Fatigue", casterLvl: 99, type: "Condition", duration: "MIN/LVL"}],
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
    NegativeLevels: 0,
    damage: 0,
    grapple: 0,
    ac: 0,
    baseAc: 10,
    touchAcL: 0,
    flatfoodedAc: 0,
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
    buffs: [{name: "mage armor", casterLvl: 20, type: "Cleric", duration: "MIN/LVL"},
            {name: "Fatigue", casterLvl: 99, type: "Condition", duration: "MIN/LVLl"}],
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
    size: "Medium",
    NegativeLevels: 0,
    damage: 0,
    grapple: 0,
    ac: 0,
    baseAc: 10,
    touchAcL: 0,
    flatfoodedAc: 0,
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
    buffs: [{name: "mage armor", casterLvl: 20, type: "Cleric", duration: "MIN/LVL"}],
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
    size: "Medium",
    NegativeLevels: 0,
    damage: 0,
    grapple: 0,
    ac: 0,
    baseAc: 10,
    touchAcL: 0,
    flatfoodedAc: 0,
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
    buffs: [{name: "Cats Grace", casterLvl: 10, type: "Cleric", duration: "MIN/LVL"}, 
            {name: "False Life", casterLvl: 3, type: "Cleric", duration: "MIN/LVL"}],
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
    size: "Medium",
    NegativeLevels: 0,
    damage: 0,
    grapple: 0,
    ac: 0,
    baseAc: 10,
    touchAcL: 0,
    flatfoodedAc: 0,
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
    buffs: [{name: "Cats Grace", casterLvl: 5, type: "Cleric", duration: "MIN/LVL"}, 
            {name: "Bears Endurance", casterLvl: 10, type: "Cleric", duration: "MIN/LVL"}, 
            {name: "Test Lesser Transformation", casterLvl: 15, type: "Cleric", duration: "MIN/LVL"}],
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
    size: "Medium",
    NegativeLevels: 0,
    damage: 0,
    grapple: 0,
    ac: 0,
    baseAc: 10,
    touchAcL: 0,
    flatfoodedAc: 0,
  }];

  export const bonusesTypes = ["enchancement", "racial","untyped", "circumstance", "alchemicalBonus", "dodge",
                              "armor bonus","enhancement armor bonus", "natural armor bonus", "enhancement natural armor bonus",
                              "shield bonus", "enhancement shield bonus",
                              "competence", "deflection", "insight", "luck", "morale", "profane", "reistance", "sacred",
                              "size", "epic", "divine", "ability drain"];
  export const bonusesNames = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];
  export const extrabonuses = ["attack", "damage", "grapple", "ac", "touch ac", "flatfooded ac"];
  export const buffTypes = ["cleric", "wizard", "druid", "bard", "condition", "armor", "Class ab.", "mode", "size", "negative Level"]