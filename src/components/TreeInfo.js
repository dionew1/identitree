import { render } from "@testing-library/react";
import React from "react";
import Spinner from "./Spinner";

class TreeInfo extends React.Component {
  renderContent() {
    return (
      <React.Fragment>
        <div style={{ display: this.props.isLoading ? "block" : "none" }}>
          <Spinner />
        </div>

        <img
          style={{
            display: this.props.isLoading ? "none" : "block",
            maxWidth: "500px",
          }}
          width="100%"
          src={this.props.result.image_url}
          alt={this.props.result.name}
          onLoad={this.props.imageLoaded}
        />
      </React.Fragment>
    );
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          background: "rgba(115, 102, 217, 0.7)",
          padding: "5px",
          color: "#efefef",
        }}
      >
        <h2>{this.props.result.name}</h2>
        {this.renderContent()}
        <p style={{ padding: "10px 0", textAlign: "center" }}>
          {this.props.result.description}
        </p>
      </div>
    );
  }
}

export default TreeInfo;
