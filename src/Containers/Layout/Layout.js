import React, { Component } from "react";

import Aux from "../../hoc/Auxialiary";
import classes from "./Layout.module.css";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <main className={classes.Container}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
