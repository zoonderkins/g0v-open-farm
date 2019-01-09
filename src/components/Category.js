import React, { Component } from "react";
import Nav from "./Nav";

import InnerBody from "./InnerBody";
class Category extends Component {
  render() {
    return (
      <div>
        <Nav />
        <InnerBody store={this.props.store} />
      </div>
    );
  }
}

export default Category;
