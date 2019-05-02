import {randomId} from './utils.js';

const core = [{
    name: "Cats Grace",
    id: randomId(),
    Duration: "1 min./level",
    type: "spell",
    level: 2,
    class: "cleric",
    values: [{
        name: "dexterity",
        type: "enchancement",
        value: () =>  4 
    }]    
}, {
    name: "Bears Endurance",
    id: randomId(),
    Duration: "1 min./level",
    type: "spell",
    level: 2,
    class: "cleric",
    values: [{
        name: "constitution",
        type: "enchancement",
        value: () => 4
    }]    
}, {
    name: "Bull's strength",
    id: randomId(),
    Duration: "1 min./level",
    type: "spell",
    level: 2,
    class: "cleric",
    values: [{
        name: "strength",
        type: "enchancement",
        value: () => 4
    }]    
}, {
    name: "Eagle's Splendor",
    id: randomId(),
    Duration: "1 min./level",
    type: "spell",
    level: 2,
    class: "cleric",
    values: [{
        name: "charisma",
        type: "enchancement",
        value: () => 4
    }]    
}, {
    name: "Fox's Cunning",
    id: randomId(),
    Duration: "1 min./level",
    type: "spell",
    level: 2,
    class: "cleric",
    values: [{
        name: "intelligence",
        type: "enchancement",
        value: () =>  4
    }]    
}, {name: "Transformation",
    id: randomId(),
    Duration: "1 round/level",
    type: "spell",
    level: 6,
    class: "cleric",
    values: [{
        name: "strength",
        type: "enchancement",
        value: () =>  4
    }, {
        name: "dexterity",
        type: "enchancement",
        value: () =>  4
    }, {
        name: "constitution",
        type: "enchancement",
        value: () =>  4
    }]
}, {name: "Test Lesser Transformation",
    id: randomId(),
Duration: "1 round/level",
type: "Druid",
level: 4,
class: "cleric",
values: [{
    name: "strength",
    type: "enchancement",
    value: () =>  2
}, {
    name: "dexterity",
    type: "enchancement",
    value: () =>  2
}, {
    name: "constitution",
    type: "enchancement",
    value: () =>  2
}]
}, {
    name: "Fatigue",
    id: randomId(),
    Duration: "10 min./level",
    type: "Condition",
    level: 99,
    values: [{
        name: "constitution",
        type: "untyped",
        value: () => -2
    },{
        name: "strength",
        type: "untyped",
        value: () => -2
    }]    
}];

export default core;
