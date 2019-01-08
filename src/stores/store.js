import { decorate, observable ,configure, action, computed, toJS} from "mobx";
configure({ enforceActions: 'observed' })
class Garden {
  vegatableList = [];
  clearList() {
    this.vegatableList = [];
  }
  updateList(inputList) {
    console.log(`inputList`, inputList);
    this.vegatableList = [...inputList];
  }

  get list () {
    return this.vegatableList.map(item=>toJS(item));
  }

}

decorate(Garden, {
  vegatableList: observable,
  clearList: action,
  updateList: action,
  list: computed
});



export default Garden;