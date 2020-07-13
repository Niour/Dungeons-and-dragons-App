import React from "react";

import classes from "./Buffs.module.css";
import { randomId } from "../../utils";
import Buff from "./Buff/Buff";
import Equipment from "./Equipment/Equipment";
import { Input } from "./../Card/Input";
import CustomMenu from "../../Containers/Boost/CustomMenu";
import Dropdown from "react-bootstrap/Dropdown";
import CustomToggle from "../../Containers/Boost/CustomToggle";
import core from "../../core";
import { special, equipments } from "../../core";
import { Select } from "antd";

const { Option } = Select;

const buffs = (props) => {
  return (
    <div className={classes.Buffs}>
      <div>
        <div className={classes.Dropdown}>
          <div>
            {/* <Dropdown>
              <Dropdown.Toggle
                as={CustomToggle}
                id="dropdown-custom-components"
              >
                Add Buff
              </Dropdown.Toggle>
              <Dropdown.Menu
                as={CustomMenu}
                children={core.map((element) => {
                  return (
                    <div id={element.id} style={{ color: "purple" }}>
                      {element.name}
                    </div>
                  );
                })}
                clicked={props.clickAddBuff}
              />
            </Dropdown> */}
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Add buff"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              // the bug of the adding more buffs if not blured could be fixed by implenting onSelect function
              onSelect={function (value, optionElement) {
                console.log(
                  "Thsi is value of inside onSelect",
                  "We need to change this with passing a new prop function eg prop.clickAddbuff2"
                );
              }}
              onBlur={function (e) {
                e.target.parentElement.nextSibling.textContent = "Select Buff";
              }}
              children={core.map((element) => {
                return (
                  <Option
                    id={element.id}
                    style={{ color: "purple" }}
                    value={element.name}
                  >
                    {element.name}
                  </Option>
                );
              })}
              onClick={props.clickAddBuff}
            ></Select>
          </div>
          <Input
            onChange={props.updateBuffCasterLevel}
            label="Caster Level: "
            type="number"
          />
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
              Add Special
            </Dropdown.Toggle>
            <Dropdown.Menu
              as={CustomMenu}
              children={special.map((element) => {
                return (
                  <div id={element.id} style={{ color: "purple" }}>
                    {element.name}
                  </div>
                );
              })}
              clicked={props.clickAddSpecial}
            />
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
              Add Equipment
            </Dropdown.Toggle>
            <Dropdown.Menu
              as={CustomMenu}
              children={equipments.map((element) => {
                return (
                  <div id={element.id} style={{ color: "purple" }}>
                    {element.name}
                  </div>
                );
              })}
              clicked={props.clickAddEquipment}
            />
          </Dropdown>
          <Input
            onChange={props.updateItemLevel}
            label="Item Level: "
            type="number"
          />
        </div>
        <p>
          <button onClick={props.sortElementsWithLevel}>
            Sort with Caster Level
          </button>
        </p>

        {props.showbuffs ? (
          <table className={classes.ThisTable}>
            <tbody>
              <tr>
                <th className={classes.ThisTable}>Buff</th>
                <th className={classes.ThisTable}>Class</th>
                <th className={classes.ThisTable}>Cast.Lvl</th>
                <th className={classes.ThisTable}>Duration</th>
                <th className={classes.ThisTable}>Spell.Lvl</th>
              </tr>
              {props.activePlayer.buffs.map((element) => (
                <Buff
                  key={randomId()}
                  clicked={props.clickBuff}
                  element={element}
                ></Buff>
              ))}
            </tbody>
          </table>
        ) : null}

        {props.showEquipment ? (
          <table className={classes.ThisTable}>
            <tbody>
              <tr>
                <th className={classes.ThisTable}>Item</th>
                <th className={classes.ThisTable}>Type</th>
                <th className={classes.ThisTable}>Slot</th>
              </tr>
              {props.activePlayer.equipment.map((element) => (
                <Equipment
                  key={randomId()}
                  clicked={props.clickEquipment}
                  element={element}
                ></Equipment>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
};

export default buffs;
