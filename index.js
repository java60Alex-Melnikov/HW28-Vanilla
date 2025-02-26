function myReduce(array, callback, initialValue) {
    let accumulator = initialValue == undefined ? array[0] : initialValue
    const startIndex = initialValue == undefined ? 1 : 0
    for (let i = startIndex; i < array.length; i++) {
      accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
  }
  
  function minMax(array) {
    const res = myReduce(array, (acc, curr) => [
    acc[0] > curr ? curr : acc[0], 
    acc[1] < curr ? curr : acc[1]],
    [array[0], array[0]]); 
    return res;
  }

  array = [6, 4, 2, 8, 10]
  array1 = ["banana", "apple", "melon", "grape"]
  
    console.log("Minimum and maximum value =", minMax(array));  
    console.log("Minimum and maximum value =", minMax(array1)); 