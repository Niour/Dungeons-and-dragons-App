import React from 'react';

import classes from "./Buffs.module.css";
import {randomId} from '../../utils';
import Buff from './Buff/Buff';
import {Input} from './../Card/Input';
import CustomMenu from '../../Containers/Boost/CustomMenu';
import Dropdown from 'react-bootstrap/Dropdown';
import CustomToggle from '../../Containers/Boost/CustomToggle';
import core from '../../core';

const buffs = (props) => {
    return (
        <div className={classes.Buffs}>
            <div>
                <div className={classes.Dropdown}>
                
                    <Dropdown>
                        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                        Add Buff
                        </Dropdown.Toggle>
                        <Dropdown.Menu 
                            as={CustomMenu}
                            children = {core.map( (element) => {return <div id={element.id}>{element.name}</div> } )}
                            clicked={props.clickAddBuff}
                        />
                    </Dropdown>
                    <Input 
                        onChange={props.updateBuffCasterLevel}
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
                        <tr>
                            <th className={classes.ThisTable}>Buff</th>
                            <th className={classes.ThisTable}>Class</th>
                            <th className={classes.ThisTable}>Cast.Lvl</th>
                            <th className={classes.ThisTable}>Duration</th>
                            <th className={classes.ThisTable}>Spell.Lvl</th>
                        </tr>
                {props.activePlayer.buffs.map(element => 
                <Buff
                    key={randomId()}
                    clicked={props.clickBuff}
                    element={element}
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