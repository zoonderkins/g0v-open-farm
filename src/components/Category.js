import React, { Component } from "react";
import Nav from "./Nav";
import InnerBody from "./InnerBody";
import {observer} from 'mobx-react';
import LoadingSpinner from './LoadingSpinner';
class Category extends Component {
  constructor(props) {
    super(props);
    let { currentTitle } = this.props;
    console.log(`[Category] currentTitle: `, currentTitle);
    this.props.store.updateTitle(currentTitle);
    // document.title = this.props.store.title;
    console.log("[itemlist]", this.props.store.itemlist);
  }
  render() {
    // let {store} = this.props.store;
    console.log(`[current loading]`, this.props.store.loading);
    return (
      <div>
        <Nav store={this.props.store} />
        <InnerBody store={this.props.store} />
        {this.props.store.loading===true&&<LoadingSpinner loading={this.props.store.loading}/>}
      </div>
    );
  }
}
Category = observer(Category);
export default Category;
