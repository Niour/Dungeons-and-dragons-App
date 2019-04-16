const core = [{
    name: "Cats Grace",
    Duration: "1 min./level",
    type: "Cleric",
    level: 2,
    values: [{
        name: "dexterity",
        type: "enchancement",
        value: () =>  4 
    }]    
}, {
    name: "Bears Endurance",
    Duration: "1 min./level",
    type: "Cleric",
    level: 2,
    values: [{
        name: "constitution",
        type: "enchancement",
        value: () => 4
    }]    
}, {
    name: "Bull's strength",
    Duration: "1 min./level",
    type: "Cleric",
    level: 2,
    values: [{
        name: "strength",
        type: "enchancement",
        value: () => 4
    }]    
}, {
    name: "Eagle's Splendor",
    Duration: "1 min./level",
    type: "Cleric",
    level: 2,
    values: [{
        name: "charisma",
        type: "enchancement",
        value: () => 4
    }]    
}, {
    name: "Fox's Cunning",
    Duration: "1 min./level",
    type: "Cleric",
    level: 2,
    values: [{
        name: "intelligence",
        type: "enchancement",
        value: () =>  4
    }]    
}, {name: "Transformation",
    Duration: "1 round/level",
    type: "Cleric",
    level: 6,
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
Duration: "1 round/level",
type: "Druid",
level: 4,
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
}];

export default core;
