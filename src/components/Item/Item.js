import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);

    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  handleDeleteItem() {
    this.props.onDelete(this.props.value.id);
  }

  render() {
    return (
      <tr>
        <td>{this.props.value.firstName}</td>
        <td>{this.props.value.lastName}</td>
        <td>{this.props.value.email}</td>
        <td>{this.props.value.boilersTypes}</td>
        <td>{this.props.value.proffesionalLevel}</td>
        <td>{this.props.value.hourRate}</td>
        <td>{this.props.value.monthlyCapacity}</td>
        <td>
          <i className="fas fa-pen" />
          <i className="fas fa-trash" onClick={this.handleDeleteItem} />
        </td>
      </tr>
    );
  }
}

export default Item;
