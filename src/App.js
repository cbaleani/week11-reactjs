import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title/Title";
import List from "./components/ListItems/List";
import AddButton from "./components/AddButton/AddButton";
import techniciansMockData from "./mocks/technicians.json";
import AddItem from "./components/AddItem/AddItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      technicians: techniciansMockData,
      formVisible: false,
      initialFormState: null,
      isEditing: false,
    };

    this.showForm = this.showForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  showForm(id) {
    if (id) {
      const result = this.state.technicians.filter((technician) => technician.id === id);
      this.setState({
        formVisible: true,
        initialFormState: result.length !== 0 ? result[0] : null,
        isEditing: true,
      });
    } else {
      this.setState({
        formVisible: true,
        initialFormState: null,
        isEditing: false,
      });
    }
  }

  handleSubmit(technician) {
    if (this.state.isEditing) {
      this.setState({
        technicians: this.state.technicians.map((element) => {
          if (element.id === technician.id) {
            element.id = technician.id;
            element.firstName = technician.firstName;
            element.lastName = technician.lastName;
            element.email = technician.email;
            element.boilersTypes = technician.boilersTypes;
            element.professionalLevel = technician.professionalLevel;
            element.hourRate = technician.hourRate;
            element.monthlyCapacity = technician.monthlyCapacity;
          }
          return element;
        }),
        isEditing: false,
        formVisible: false,
      });
    } else {
      this.setState({
        technicians: [...this.state.technicians, technician],
        formVisible: false,
      });
    }
  }

  handleDeleteItem(id) {
    this.setState({
      technicians: this.state.technicians.filter((technician) => technician.id !== id),
    });
  }

  render() {
    return (
      <div className="App">
        <Title>Technicians</Title>
        <List items={this.state.technicians} onDeleteItem={this.handleDeleteItem} onUpdateItem={this.showForm} />
        <AddButton showForm={this.showForm} />
        {this.state.formVisible && <AddItem onSubmit={this.handleSubmit} initialState={this.state.initialFormState} />}
      </div>
    );
  }
}

export default App;
