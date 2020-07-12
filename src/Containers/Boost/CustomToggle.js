import React from "react";

class CustomToggle extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.onClick(e);
  }

  render() {
    return <button onClick={this.handleClick}>{this.props.children}</button>;
  }
}

export default CustomToggle;
