import {apiUrl} from '../config/config.json';
/**
 * @description getVegatableList
 * 
 * @param {number} numToFetch
 * @param {Function} filterFn
 * @param {Function} mockFn,
 * @param {boolean} isMock
 */
const getVegatableList = async ({numToFetch=10, filterFn=null, mockFn=null, isMock=false}) => {
  // load data from apiUrl
  try {
    let result = await fetch(`${apiUrl}`);
    let finalResult = null;
    if (result.status === 200) {
      try {
        finalResult = await result.json();
      } catch (parseErr) {
        throw new Error(parseErr.toString());
      }
    } else {
      finalResult = await result.text();
      throw new Error(finalResult);
    } 
    
    // only list previous numToFetch items
    finalResult = finalResult.filter((item)=> {
      return (item.cover != null && item.avg_total_growing_days!= null && item.min_growing_temperature!= null
      && item.height!=null) || (item.max_pH!=null && item.min_pH!=null && item.variety!=null);
    });
    // doMock with growth_month
    if (isMock) {
      finalResult = finalResult.map((item, index)=> {
        let  newItem = {...item, growth_month: ((index+1)%12+1)}
        return newItem;
      })
    }
    if (filterFn!=null && typeof filterFn === "function" ) {
      finalResult = finalResult.filter((item)=>filterFn(item));
    }
    finalResult = finalResult.slice(0, numToFetch);
    console.log(`[getVegatableList] api data:`,finalResult);
    return finalResult;
  } catch (e) {
    throw e;
  }
};

export { getVegatableList };