import React from "react";

import classes from "./Equipment.module.css";
import { randomId } from "../../../utils";

const widthButton = {
  width: "100%",
  color: "white",
  backgroundColor: "#1fe093",
};

const equipment = (props) => {
  return (
    <tr className={classes.Row} key={randomId()} onClick={props.clicked}>
      <td className={classes.Row}>
        <button style={widthButton}>
          {props.element.name + " +" + props.element.casterLvl}
        </button>
      </td>
      <td className={classes.Row}>{props.element.type} </td>
      <td className={classes.Row}>{props.element.slot}</td>
    </tr>
  );
};

export default equipment;
