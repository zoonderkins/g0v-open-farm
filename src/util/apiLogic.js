import {apiUrl} from '../config/config.json';
/**
 * @description getVegatableList
 * 
 * @param {number} numToFetch 
 */
const getVegatableList = async ({numToFetch=10}) => {
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
      return item.cover != null && item.avg_total_growing_days!= null && item.min_growing_temperature!= null
      &&item.height!=null && item.max_pH!=null && item.min_pH!=null && item.variety!=null;
    });
    finalResult = finalResult.slice(0, numToFetch);
    console.log(finalResult);
    return finalResult;
  } catch (e) {
    throw e;
  }
};

export { getVegatableList };