import React, { Component } from "react";
import Nav from "./Nav";
import InnerBody from "./InnerBody";
import { observer } from "mobx-react";
import LoadingSpinner from "./LoadingSpinner";
import { getVegatableList } from "../util/apiLogic";
class Category extends Component {
  constructor(props) {
    super(props);
    let { currentTitle } = this.props;
    console.log(`[Category] currentTitle: `, currentTitle);
    this.props.store.updateTitle(currentTitle);
    // document.title = this.props.store.title;
    console.log("[itemlist]", this.props.store.itemlist);
  }

  async componentWillReceiveProps() {
    try {
      // document.title = this.props.store.title;
      this.props.store.setLoadingState(true);
      let vegetableList = await getVegatableList({ numToFetch: 200 });
      this.props.store.updateList(vegetableList);
      console.log(`[itemlist]`, this.props.store.itemlist);
    } catch (e) {
      console.log(`[getVegatableList] error :`, e.toString());
    } finally {
      this.props.store.setLoadingState(false);
    }
  }
  render() {
    // let {store} = this.props.store;
    console.log(`[current loading]`, this.props.store.loading);
    return (
      <React.Fragment>
        <Nav store={this.props.store} />
        <InnerBody store={this.props.store} />
        {this.props.store.loading === true && (
          <LoadingSpinner loading={this.props.store.loading} />
        )}
      </React.Fragment>
    );
  }
}
Category = observer(Category);
export default Category;
