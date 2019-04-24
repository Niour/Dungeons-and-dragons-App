import React from 'react';

import classes from "./Buffs.module.css";
import {randomId} from '../../utils';
import Buff from './Buff/Buff';
import {Input} from './../Card/Input';
import CustomMenu from '../../Containers/Boost/CustomMenu';
import Dropdown from 'react-bootstrap/Dropdown';
import CustomToggle from '../../Containers/Boost/CustomToggle';


const buffs = (props) => {
    return (
        <div className={classes.Buffs}>
            <div>
                <div className={classes.Dropdown}>
                
                    <Dropdown>
                        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                        Add Buff (TbF)
                        </Dropdown.Toggle>
                        <Dropdown.Menu as={CustomMenu}>
                        <Dropdown.Item >Test-Spell-1 </Dropdown.Item>
                        <Dropdown.Item >Test-Spell-2 </Dropdown.Item>
                        <Dropdown.Item >Test-Spell-3</Dropdown.Item>
                        <Dropdown.Item >Test-Spell-4</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
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
                        <tr>
                            <th className={classes.ThisTable}>Buff</th>
                            <th className={classes.ThisTable}>Class</th>
                            <th className={classes.ThisTable}>Level</th>
                            <th className={classes.ThisTable}>Duration</th>
                        </tr>
                {props.activePlayer.buffs.map(element => 
                <Buff
                    key={randomId()}
                    value={element.name}
                    casterLvl={element.casterLvl}
                    clicked={props.clickBuff}
                    type={element.type}
                    duration={element.duration}
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