import { Container } from "unstated";

export default class GardenContainer extends Container {
  constructor() {
    super();
    // setup default state
    this.state = {
      itemList: []
    }
  }

  updateList(updatedList) {
    this.setState({
      ...this.state,
      itemList: updatedList
    });
  }

  clearList() {
    this.setState({
     itemList: []
    });
  }
  
}