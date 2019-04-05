import React, { Component } from 'react';

import classes from './Stats.module.css';

const stats = (props) => {
    return (
        <div className={classes.Stats}>
            <div>
                <p> <b>Player :</b>{props.activePlayer.name}</p>
                <p><h3>Hit Points : {props.activePlayer.hitpoints}</h3></p>
                <p> has this <b> Buffs : </b> {props.activePlayer.buffs.join()}  </p>
                <p> <b> Strenght :</b> {props.activePlayer.strenght} </p>
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