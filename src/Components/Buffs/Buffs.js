import React from 'react';

import classes from "./Buffs.module.css";
import {randomId} from '../../utils';
import Buff from './Buff/Buff';


const buffs = (props) => {
    return (
        <div className={classes.Buffs}>
            <div>
                {props.activePlayer.buffs.map(element => 
                <Buff
                    key={randomId()}
                    value={element}
                    clicked={props.clickBuff}
                    >
                </Buff>
                )}
            </div>
        </div>
    )
}

export default buffs;