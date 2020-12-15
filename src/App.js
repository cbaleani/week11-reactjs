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
    };

    this.showForm = this.showForm.bind(this);
    this.handleCreateItem = this.handleCreateItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  showForm() {
    this.setState({
      formVisible: true,
    });
  }

  handleCreateItem(technician) {
    this.setState({
      technicians: [...this.state.technicians, technician],
    });
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
        <List items={this.state.technicians} onDeleteItem={this.handleDeleteItem} />
        <AddButton showForm={this.showForm} />
        {this.state.formVisible && <AddItem onSubmit={this.handleCreateItem} />}
      </div>
    );
  }
}

export default App;
