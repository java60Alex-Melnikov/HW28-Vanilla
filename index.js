function myReduce(array, callback, initialValue) {
    let accumulator = initialValue == undefined ? array[0] : initialValue
    const startIndex = initialValue == undefined ? 1 : 0
    for (let i = startIndex; i < array.length; i++) {
      accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
  }
  
