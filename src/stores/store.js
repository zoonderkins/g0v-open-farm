import { decorate, observable ,configure, action, computed, toJS} from "mobx";
configure({ enforceActions: 'observed' })
/**
 * @description storeObject Garden
 */
class Garden {
  /**
   * @description observable isLoading
   */
  isLoading = false;
  /**
   * @action
   * 
   * @param {boolean} currentState 
   */
  setLoadingState(currentState) {
    this.isLoading = currentState;
  }
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
  
  /**
   * @description getter to access loading
   */
  get loading () {
    return toJS(this.isLoading);
  }
}

decorate(Garden, {
  isLoading: observable,
  vegatableList: observable,
  clearList: action,
  updateList: action,
  itemlist: computed,
  setLoadingState: action
});



export default Garden;