import React, { Component } from "react";
import "./AddItem.css";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.floor(Math.random() * 101),
      firstName: "",
      lastName: "",
      email: "",
      boilersTypes: "",
      professionalLevel: "",
      hourRate: "",
      monthlyCapacity: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    if (this.props.initialState) {
      this.handleEdit(this.props.initialState);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.isEditing && this.props.initialState !== prevProps.initialState) {
      this.handleEdit(this.props.initialState);
    }
  }

  handleEdit(technicianToEdit) {
    this.setState({
      id: technicianToEdit.id,
      firstName: technicianToEdit.firstName,
      lastName: technicianToEdit.lastName,
      email: technicianToEdit.email,
      boilersTypes: technicianToEdit.boilersTypes,
      professionalLevel: technicianToEdit.professionalLevel,
      hourRate: technicianToEdit.hourRate,
      monthlyCapacity: technicianToEdit.monthlyCapacity,
    });
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
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </fieldset>
        <fieldset>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
        </fieldset>
        <fieldset>
          <label>Email</label>
          <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
        </fieldset>
        <fieldset>
          <label>Boilers Types</label>
          <input
            type="text"
            name="boilersTypes"
            placeholder="Boilers types"
            value={this.state.boilersTypes}
            onChange={this.handleChange}
          />
        </fieldset>
        <fieldset>
          <label>Professional Level</label>
          <input
            type="text"
            name="professionalLevel"
            placeholder="Professional level"
            value={this.state.professionalLevel}
            onChange={this.handleChange}
          />
        </fieldset>
        <fieldset>
          <label>Hour Rate</label>
          <input
            type="text"
            name="hourRate"
            placeholder="Hour rate"
            value={this.state.hourRate}
            onChange={this.handleChange}
          />
        </fieldset>
        <fieldset>
          <label>Monthly Capacity</label>
          <input
            type="number"
            name="monthlyCapacity"
            placeholder="Monthly capacity"
            value={this.state.monthlyCapacity}
            onChange={this.handleChange}
          />
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default AddItem;
