import React from 'react';

import classes from "./Buff.module.css";
import {randomId} from '../../../utils';
import core from '../../../core';
import Aux from '../../../hoc/Auxialiary';

const buff = (props) => {
    return (
        <Aux>
            <tr 
                key={randomId()}
                onClick={props.clicked}>
                <th>{props.value}</th>
                <th>{props.casterLvl}</th>
                <th>{props.type}</th>
            </tr>
        </Aux>
    )
}

export default buff;