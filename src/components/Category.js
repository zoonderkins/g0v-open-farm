import React, { Component } from "react";
import Nav from "./Nav";
import InnerBody from "./InnerBody";

class Category extends Component {
  render() {
    console.log("[itemlist]", this.props.store.itemlist);
    return (
      <div>
        <Nav />
        <InnerBody store={this.props.store} />
      </div>
    );
  }
}

export default Category;
