import React from 'react';

import classes from "./Buffs.module.css";
import {randomId} from '../../utils';
import Buff from './Buff/Buff';
import {Input} from './../Card/Input';

const buffs = (props) => {
    return (
        <div className={classes.Buffs}>
            <div>
                <div className={classes.Dropdown}>
                <button className={classes.DropBtn}>Add Buff</button> 
                <div>
                    <a>Test 1 </a>
                    <a>Test 2</a>
                </div>
                <Input 
                    label="Caster Level: "
                    type="number"
                />
                </div>
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