import React, { Component } from "react";

import "./App.css";

import Header from "./header";
import Table from "./table";
import Toolbar from "./toolbar";

import getContacts from "./data/get-contacts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      nameFilter: "",
      stateFilter: ""
    };
    this.updateNameFilter = this.updateNameFilter.bind(this);
    this.updateStateFilter = this.updateStateFilter.bind(this);
  }

  componentDidMount() {
    const data = getContacts();
    data.then(response => {
      this.setState({
        contacts: response
      });
    });
  }

  updateNameFilter(value) {
    this.setState({
      nameFilter: value
    });
  }

  updateStateFilter(option) {
    this.setState({
      stateFilter: option
    });
    console.log("state selected! " + this.state.stateFilter);
  }

  render() {
    return (
      <div>
        <Header />
        <Toolbar
          filterName={this.updateNameFilter}
          filterState={this.updateStateFilter}
        />
        <Table
          contacts={this.state.contacts}
          nameFilter={this.state.nameFilter}
          stateFilter={this.state.stateFilter}
        />
      </div>
    );
  }
}

export default App;
