import React from 'react';

import classes from './Stats.module.css';
import {Input} from '../Card/Input';
import CustomMenu from '../../Containers/Boost/CustomMenu';
import Dropdown from 'react-bootstrap/Dropdown';
import CustomToggle from '../../Containers/Boost/CustomToggle';
import {sizes} from '../../constants';
import {randomId} from '../../utils';
import Checkbox from '../../Containers/Checkbox/Checkbox';

const pStyle ={
    fontSize: '25px',
}

const itemStyle = {
    display: "flex",
    flexDirection: "row",
}

const margin = {
    marginLeft: 40,
}

const marginBottom = {
    marginBottom: 2,
}

const stats = (props) => {
    return (
        <div className={classes.Stats} >
            <div >
                <div >
                    <p> <b>Player :</b>{props.activePlayer.name}</p>
                    <b><p style={pStyle}>Hit Points : {props.activePlayer.hitpoints}</p></b>
                    <p > <b style={pStyle}>AC : {props.activePlayer.ac}  </b> Touch Ac : {props.activePlayer.touchAcL}</p>
                    <p> Has this <b> Buffs : </b> {props.activePlayer.buffs.map(e => e.name).join(", ")}  </p>
                </div>
                <div style={itemStyle}>
                    <div >
                        <p> <b> strength :</b> {props.activePlayer.strength} </p>
                        <p> <b> Dexterity :</b> {props.activePlayer.dexterity} </p>
                        <p> <b> Constitution :</b> {props.activePlayer.constitution} </p>
                        <p> <b> Wisdom :</b> {props.activePlayer.wisdom} </p>
                        <p> <b> Charisma :</b> {props.activePlayer.charisma} </p>
                        <p> <b> Intelligence :</b> {props.activePlayer.intelligence} </p>
                    </div>
                    <div style={margin}>
                        <p><b>For : </b>{props.activePlayer.fort}</p>
                        <p><b>Ref : </b>{props.activePlayer.ref}</p>
                        <p><b>Will : </b>{props.activePlayer.will}</p>
                    </div>
                    <div style={margin}>
                        <p><b>Bab : </b>{props.activePlayer.Bab}</p>
                        <p><b>Attack : </b>{props.activePlayer.attackRoll}</p>
                    </div>
                    
                </div>
                <Input 
                    label="Negative Levels: "
                    type="number"
                    value={props.activePlayer.NegativeLevels}
                    onChange={props.onNegativeLevelsChange}>
                </Input>
                <Input 
                    label="Max Dext Modifier: "
                    type="number"
                    value={props.activePlayer.maxDex}
                    onChange={props.onMaxDexChange}>
                </Input>
                    <div style={itemStyle}>
                        <div>
                            <button onClick={props.clickShowExtras}> Extras </button>
                            {props.showExtras ? 
                            <div>
                            <p style={marginBottom}><Checkbox label={"Flank : "} checked={true} clicked={ () => console.log("clicked!")}></Checkbox>  </p>
                            <p style={marginBottom}><b>Test</b></p>
                            <p style={marginBottom}><b>Test</b></p>
                            <p style={marginBottom}><b>Test</b></p>
                            </div>
                            : null}
                        </div>
                    <Dropdown style={margin}>
                        <b>Size : </b>
                        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                        {props.activePlayer.size}
                        </Dropdown.Toggle>
                        <Dropdown.Menu 
                            as={CustomMenu}
                            children = {sizes.map( (element) => {return <div id={randomId()}>{element}</div> } )}
                            clicked={props.clickAddSize}
                        >
                        </Dropdown.Menu>
                    </Dropdown>
                    </div>
            </div>
        </div>


    )
}

export default stats;