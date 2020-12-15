import React, { Component } from "react";

class AddButton extends Component {
  showForm = () => this.props.showForm();

  render() {
    return <i className="fas fa-plus-circle" onClick={this.showForm} />;
  }
}

export default AddButton;
