import React from 'react';

import classes from "./Buff.module.css";
import {randomId} from '../../../utils';
import core from '../../../core';
import Aux from '../../../hoc/Auxialiary';

const buff = (props) => {
    return (
        <Aux>
            <tr className={classes.Row}
                key={randomId()}
                onClick={props.clicked}>
                <th className={classes.Row}>{props.value}</th>
                <th >{props.type}</th>
                <th >{props.casterLvl}</th>
            </tr>
        </Aux>
    )
}

export default buff;