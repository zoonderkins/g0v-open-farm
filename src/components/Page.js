import React, { Component } from "react";
import Nav from "./Nav";

import InnerBody from "./InnerBody";
import Garden from "../stores/store";
// import { Provider } from 'mobx-react';
// const appStore = new Garden();

class Page extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.store);
  }

  render() {
    this.props.store.clearList();
    console.log("[12313]", this.props.store.list);
    return (
      <div>
        <Nav />
        <InnerBody store={this.props.store} />
      </div>
    );
  }
}

export default Page;
