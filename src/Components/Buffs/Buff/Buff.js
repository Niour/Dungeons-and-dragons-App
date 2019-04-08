import React from 'react';

import classes from "./Buff.module.css";
import {randomId} from '../../../utils';
import core from '../../../core';

const buff = (props) => {
    return (
        <div className={classes.Buff}>
            <p
                key={randomId()}
                onClick={props.clicked}>
                {props.value}
            </p>
        </div>
    )
}

export default buff;