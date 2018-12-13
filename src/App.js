import React, { Component } from "react";

import "./App.css";

import Header from "./header";
import Table from "./table";

import getContacts from "./data/get-contacts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      nameFilter: "",
      stateFilter: ""
    };
  }

  componentDidMount() {
    const data = getContacts();
    data.then(response => {
      this.setState({
        contacts: response
      });
      console.log(this.state);
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="Toolbar" />
        <Table contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
