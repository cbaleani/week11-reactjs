import React, { Component } from "react";
import "./AddItem.css";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      boilersTypes: "",
      proffesionalLevel: "",
      hourRate: "",
      monthlyCapacity: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    this.props.onSubmit(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </fieldset>
        <fieldset>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </fieldset>
        <fieldset>
          <label>Email</label>
          <input type="email" name="email" placeholder="Email" value={this.state.value} onChange={this.handleChange} />
        </fieldset>
        <fieldset>
          <label>Boilers types</label>
          <input
            type="text"
            name="boilersTypes"
            placeholder="Boilers types"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </fieldset>
        <fieldset>
          <label>Proffesional level</label>
          <input
            type="text"
            name="proffesionalLevel"
            placeholder="Proffesional level"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </fieldset>
        <fieldset>
          <label>Hours rate</label>
          <input
            type="text"
            name="hourRate"
            placeholder="Hour rate"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </fieldset>
        <fieldset>
          <label>Monthly capacity</label>
          <input
            type="number"
            name="monthlyCapacity"
            placeholder="Monthly capacity"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </fieldset>
        <button type="submit">Add</button>
      </form>
    );
  }
}
export default AddItem;
