import React, { Component } from 'react';

import classes from './Stats.module.css';

const stats = (props) => {
    return (
        <div className={classes.Stats}>
            <div> <b>Player :</b>{props.activePlayer.name} has this <b>buffs</b> : </div>
        </div>


    )
}

export default stats;