import { apiUrl, newsApiUrl,  cropsApi } from '../config/config.json';
/**
 * @description getVegatableList
 * 
 * @param {number} numToFetch
 * @param {Function} filterFn
 */
const getVegatableList = async ({numToFetch=10, filterFn=null}) => {
  // load data from apiUrl
  try {
    let finalResult = await fetchMethod({apiUrl:`${apiUrl}`}); 
    if (filterFn!=null && typeof filterFn === "function" ) {
      finalResult = finalResult.filter((item)=>filterFn(item));
    }
    // only list previous numToFetch items
    finalResult = finalResult.filter((item)=> {
      return (item.cover !== null);
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
const fetchMethod = async ({apiUrl="", option=null}) => {
  try {
    if (apiUrl===undefined||apiUrl===""){
      throw new Error(`apiUrl missing: ${apiUrl}`);
    }
    let result = null;
    if (option === null) {
      result = await fetch(`${apiUrl}`);
    } else {
      console.log(option);
      result = await fetch(`${apiUrl}`, option);
    }
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
const getNewsList = async ({numToFetch=10, filterFn=null}) => {
  // load data from apiUrl
  try {
    let finalResult = await fetchMethod({apiUrl:`${newsApiUrl}`}); 
    if (filterFn!=null && typeof filterFn === "function" ) {
      finalResult = finalResult.filter((item)=>filterFn(item));
    }
    // only list previous numToFetch items
    // finalResult = finalResult.slice(0, numToFetch);
    console.log(`[getNewsList] api data:`,finalResult);
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
    let finalResult = await fetchMethod({apiUrl:`${cropsApi}`}); 
    if (filterFn!=null && typeof filterFn === "function" ) {
      finalResult = finalResult.filter((item)=>filterFn(item));
    }
    // only list previous numToFetch items
    // finalResult = finalResult.slice(0, numToFetch);
    let keys = Object.keys(finalResult);
    console.log(keys);
    let tempArr = [];
    keys.forEach(key=>{
      tempArr.push({key, value:finalResult[`${key}`]});
    });
    finalResult = [...tempArr];
    console.log(`[getCropsList] api data:`,finalResult);
    return finalResult;
  } catch (e) {
    throw e;
  }
};
export { getVegatableList, getNewsList , getCropsList };