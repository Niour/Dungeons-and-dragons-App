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
                
                    <button className={classes.DropBtn}>Add Buff(TbF)</button> 

                    
                    <div className={classes.Dropdown_content} > DropDown Search(TbF)
                    
                        <input className={classes.MyInput}>

                        </input>

                        <span> </span>

                    </div>

                    <Input 
                        label="Caster Level: "
                        type="number"
                    />

                </div>

                
                <p>
                    <button
                    onClick={props.sortElementsWithLevel}
                    >Sort with Caster Level</button>
                </p>
                <table className={classes.ThisTable}>
                    <tbody>
                {props.activePlayer.buffs.map(element => 
                <Buff
                    key={randomId()}
                    value={element.name}
                    casterLvl={element.casterLvl}
                    clicked={props.clickBuff}
                    type={element.type}
                    >
                </Buff>
                )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default buffs;