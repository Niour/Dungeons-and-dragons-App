import React, { Component } from 'react';
import './Card.css';
import {Input} from './Input.js';

const card = (props) => {
    return (
        <div className="Card">

            <Input
            label="Name: "
            type="text"
            value={props.name}
            onChange={props.onNameChange}
            />

            <Input
            label="init: "
            type="number"
            value={props.initiative}
            onChange={props.onInitiativeChange}
            />  

            <Input
            label="Hitpoints: "
            type="number"
            value={props.hitpoints}
            onChange={props.onHitpointsChange}
            /> 
            <button onClick={props.onRemove}>
                X
            </button>
            <button>
                Buffs
            </button>
            <button>
                Stats
            </button>
        </div>
    )
};

export default card;