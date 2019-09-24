import React from 'react';

import classes from "./Buff.module.css";
import {randomId} from '../../../utils';

const widthButton = {
    width: "100%",
    color: "white",
    backgroundColor: "#1fe093"
};

const buff = (props) => {
    return (
            <tr 
                className={classes.Row}
                key={randomId()}
                onClick={props.clicked}>
                <td className={classes.Row} ><button style={widthButton} keyname = {randomId()}>{props.element.name}</button></td>
                <td className={classes.Row}>{props.element.type === "spell" ? props.element.class : props.element.type} </td>
                <td className={classes.Row}>{props.element.casterLvl}</td>
                <td className={classes.Row}>{props.element.duration}</td>
                <td className={classes.Row}>{props.element.spellLvl}</td>
            </tr>
    )
}

export default buff;