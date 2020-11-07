import { render } from "@testing-library/react";
import React from "react";
import tree from "../api/tree";
import SearchBar from "./SearchBar";
import TreeInfo from "./TreeInfo";

class App extends React.Component {
  state = { result: {} };

  onSearchSubmit = async (term) => {
    const response = await tree.post("/trees/which-am-i", { name: term });

    this.setState({ result: response.data.result });
  };

  renderTree() {
    if (Object.keys(this.state.result).length !== 0) {
      return <TreeInfo result={this.state.result} />;
    }
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {this.renderTree()}
      </div>
    );
  }
}

export default App;
