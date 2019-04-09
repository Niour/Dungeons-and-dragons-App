import React from 'react';

import classes from "./Buff.module.css";
import {randomId} from '../../../utils';
import core from '../../../core';

const buff = (props) => {
    return (
        <table className={classes.Buff}>
            <tbody>
                <tr
                    key={randomId()}
                    onClick={props.clicked}>
                    <th>{props.value}</th>
                    <th>5</th>
                </tr>
            </tbody>
        </table>
    )
}

export default buff;