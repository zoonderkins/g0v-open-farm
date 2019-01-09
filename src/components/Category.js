import React, { Component } from "react";
import Nav from "./Nav";

import InnerBody from "./InnerBody";
import Garden from "../stores/store";
// import { Provider } from 'mobx-react';
// const appStore = new Garden();

class Category extends Component {
  render() {
    // this.props.store.clearList();
    console.log("[list]", this.props.store.list);
    return (
      <div>
        <Nav />
        <InnerBody store={this.props.store} />
      </div>
    );
  }
}

export default Category;
