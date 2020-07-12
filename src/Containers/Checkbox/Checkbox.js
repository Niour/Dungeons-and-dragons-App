import React, { Component } from "react";

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.checked,
    };
  }

  toggleChange = () => {
    this.props.clicked();
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };
  render() {
    return (
      <label>
        <b> {this.props.label}</b>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.toggleChange}
        />
      </label>
    );
  }
}

export default Checkbox;
