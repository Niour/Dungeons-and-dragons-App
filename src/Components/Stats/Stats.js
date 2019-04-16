import React from 'react';

import classes from './Stats.module.css';

const pStyle ={
    fontSize: '25px',
}

const stats = (props) => {
    return (
        <div className={classes.Stats}>
            <div>
                <p> <b>Player :</b>{props.activePlayer.name}</p>
                <b><p style={pStyle}>Hit Points : {props.activePlayer.hitpoints}</p></b>
                <p> Has this <b> Buffs : </b> {props.activePlayer.buffs.map(e => e.name).join(", ")}  </p>
                <p> <b> strength :</b> {props.activePlayer.strength} </p>
                <p> <b> Dexterity :</b> {props.activePlayer.dexterity} </p>
                <p> <b> Constitution :</b> {props.activePlayer.constitution} </p>
                <p> <b> Intelligence :</b> {props.activePlayer.intelligence} </p>
                <p> <b> Wisdom :</b> {props.activePlayer.wisdom} </p>
                <p> <b> Charisma :</b> {props.activePlayer.charisma} </p>
            </div>
        </div>


    )
}

export default stats;