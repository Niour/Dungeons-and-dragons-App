import React from 'react';
import classes from "./Card.module.css";
import {Input} from './Input.js';

const card = (props) => {
    return (
        <div className={classes.Card}>

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
            <button onClick={props.clickBuffs}>
                Buffs (TbF)
            </button>
            <button onClick={props.clickStats}>
                Stats
            </button>
        </div>
    )
};

export default card;