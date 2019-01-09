import { decorate, observable ,configure, action, computed, toJS} from "mobx";
configure({ enforceActions: 'observed' })
/**
 * @description storeObject Garden
 */
class Garden {
  /**
   * @description observable List for fetch data
   */
  vegatableList = [];
  clearList() {
    this.vegatableList = [];
  }
  /**
   * @description action to update List
   */
  updateList(updatedList) {
    console.log(`[Garden] store updatedList:`, updatedList);
    this.vegatableList = [...updatedList];
  }
  /**
   * @description getter to access data 
   */
  get itemlist () {
    return this.vegatableList.map(item=>toJS(item));
  }

}

decorate(Garden, {
  vegatableList: observable,
  clearList: action,
  updateList: action,
  itemlist: computed
});



export default Garden;