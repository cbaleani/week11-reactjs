import React, { Component } from "react";
import Item from "../Item/Item";

class List extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Boilers types</th>
              <th>Proffesional level</th>
              <th>Hour rate</th>
              <th>Monthly capacity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.items.map((item) => (
              <Item key={item.id} value={item} onDelete={this.props.onDeleteItem} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
