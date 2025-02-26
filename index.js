function myReduce(array, callback, initialValue) {
    let accumulator = initialValue == undefined ? array[0] : initialValue
    const startIndex = initialValue == undefined ? 1 : 0
    for (let i = startIndex; i < array.length; i++) {
      accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
  }
  
  function minMax(array) {
    const res = myReduce(array, (acc, curr) => [acc[0] > curr ? curr : acc[0] , acc[1] < curr ? curr : acc[1]],
    [arr[0], arr[0]]);
    return res;
  }

