import { apiUrl, courseApiUrl,  cropsApi } from '../config/config.json';
/**
 * @description getVegatableList
 * 
 * @param {number} numToFetch
 * @param {Function} filterFn
 */
const getVegatableList = async ({numToFetch=10, filterFn=null}) => {
  // load data from apiUrl
  try {
    let finalResult = await fetchMethod(`${apiUrl}`); 
    if (filterFn!=null && typeof filterFn === "function" ) {
      finalResult = finalResult.filter((item)=>filterFn(item));
    }
    // only list previous numToFetch items
    finalResult = finalResult.filter((item)=> {
      return (item.cover != null && item.avg_total_growing_days!= null && item.min_growing_temperature!= null
      && item.height!=null) || (item.max_pH!=null && item.min_pH!=null && item.variety!=null);
    });
    finalResult = finalResult.slice(0, numToFetch);
    console.log(`[getVegatableList] api data:`,finalResult);
    return finalResult;
  } catch (e) {
    throw e;
  }
};
/**
 * @description fetchMethod
 * 
 * @param {string} apiUrl 
 */
const fetchMethod = async (apiUrl) => {
  try {
    if (apiUrl===undefined||apiUrl===""){
      throw new Error(`apiUrl missing: ${apiUrl}`);
    }
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
    return finalResult;
  } catch (e) {
    throw e;
  }
};
/**
 * @description getCourseList
 * 
 * @param {jsonObject} criteria 
 */
const getCourseList = async ({numToFetch=10, filterFn=null}) => {
  // load data from apiUrl
  try {
    let finalResult = await fetchMethod(`${courseApiUrl}`); 
    if (filterFn!=null && typeof filterFn === "function" ) {
      finalResult = finalResult.filter((item)=>filterFn(item));
    }
    // only list previous numToFetch items
    finalResult = finalResult.slice(0, numToFetch);
    console.log(`[getCourseList] api data:`,finalResult);
    return finalResult;
  } catch (e) {
    throw e;
  }
};

/**
 * @description getCropsList
 * 
 * @param {jsonObject} criteria 
 */
const getCropsList = async ({numToFetch=10, filterFn=null}) => {
  // load data from apiUrl
  try {
    let finalResult = await fetchMethod(`${cropsApi}`); 
    if (filterFn!=null && typeof filterFn === "function" ) {
      finalResult = finalResult.filter((item)=>filterFn(item));
    }
    // only list previous numToFetch items
    finalResult = finalResult.slice(0, numToFetch);
    console.log(`[getCropsList] api data:`,finalResult);
    return finalResult;
  } catch (e) {
    throw e;
  }
};
export { getVegatableList, getCourseList, getCropsList };