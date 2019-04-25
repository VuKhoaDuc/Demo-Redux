import React, { Component } from "react";
import AddNickname from "./AddNickname";
import ListUser from "./ListUser";

class App extends Component {
  render() {
    return (
      <div>
        <AddNickname />
        <ListUser />
      </div>
    );
  }
}

export default App;
