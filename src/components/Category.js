import React, { Component } from "react";
import Nav from "./Nav";
import InnerBody from "./InnerBody";

class Category extends Component {
  render() {
    let { currentTitle } = this.props;
    console.log(`[Category] currentTitle: `, currentTitle);
    this.props.store.updateTitle(currentTitle);
    // document.title = this.props.store.title;
    console.log("[itemlist]", this.props.store.itemlist);
    return (
      <div>
        <Nav store={this.props.store} />
        <InnerBody store={this.props.store} />
      </div>
    );
  }
}

export default Category;
