import { decorate, observable ,configure, action, computed, toJS} from "mobx";
configure({ enforceActions: 'observed' })
/**
 * @description storeObject Garden
 */
class Garden {
  /**
   * @description observable currentTitle
   */
  currentTitle = "Home";
  /**
   * @description observable isLoading
   */
  isLoading = false;
  /**
   * @description observable cropsList
   */
  cropsList = [];
  /**
   * 
   */
  updateCropsList(updatedCropsList)  {
    this.cropsList = [...updatedCropsList];
  }
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
  
  updateTitle(currentTitle) {
    this.currentTitle = currentTitle;
  }
  get title() {
    return toJS(this.currentTitle);
  }
  /**
   * @description getter to access loading
   */
  get loading () {
    return toJS(this.isLoading);
  }
  /**
   * @description getter to access coursesList
   */
  get cropList () {
    return this.cropsList.map(item=>toJS(item));
  }
}

decorate(Garden, {
  isLoading: observable,
  vegatableList: observable,
  clearList: action,
  updateList: action,
  itemlist: computed,
  setLoadingState: action,
  currentTitle: observable,
  updateTitle: action,
  title: computed,
  cropsList: observable,
  updateCropsList: action,
  cropList: computed
});



export default Garden;