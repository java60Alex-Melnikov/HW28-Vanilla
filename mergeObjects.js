export function mergeObjects(firstObj, secondObj, isFirstPref) {
    let result = {};

    for (let key in firstObj) {
      if (firstObj.hasOwnProperty(key)) {
        result[key] = firstObj[key];
      }
    }
  
    for (let key in secondObj) {
      if (secondObj.hasOwnProperty(key)) {
        result[key] = key in result && isFirstPref ? result[key] : secondObj[key];
      }
    }
    return result;
  }