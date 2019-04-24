import React from 'react';

import classes from "./Buff.module.css";
import {randomId} from '../../../utils';

const buff = (props) => {
    return (
            <tr className={classes.Row}
                key={randomId()}
                onClick={props.clicked}>
                <td className={classes.Row}>{props.value}</td>
                <td className={classes.Row}>{props.type} </td>
                <td className={classes.Row}>{props.casterLvl}</td>
                <td className={classes.Row}>{props.duration}</td>
            </tr>
    )
}

export default buff;