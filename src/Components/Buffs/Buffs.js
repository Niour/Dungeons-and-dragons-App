import React from 'react';

import classes from "./Buffs.module.css";
import {randomId} from '../../utils';
import Buff from './Buff/Buff';
import {Input} from './../Card/Input';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import DropdownItem from 'react-bootstrap/DropdownItem';


const buffs = (props) => {
    return (
        <div className={classes.Buffs}>
            <div>


                <div className={classes.Dropdown}>
                
                <Dropdown>
  <Dropdown.Toggle  id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>;
                    
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