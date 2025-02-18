function minMax(...values) {
  let Min = Infinity;
  let Max = -Infinity;

  for(let i = 0; i < values.length; i++) {
  let value = values[i]
  if (Array.isArray(value)) {
    let resultMin = minValue(value);
    let resultMax = maxValue(value);
    if (resultMin < Min) Min = resultMin;
    if (resultMax > Max) Max = resultMax;
  }
  else {
    if (value < Min) Min = value;
    if (value > Max) Max = value;
    }
  }
  return [Min, Max];
}

function minValue(array) {
  let min = array[0];
  for(let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      }
    }
    return min;
  }

function maxValue(array) {
  let max = array[0];
  for(let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]; 
    }
  }
  return max;
}

console.log(minMax(1, 2, 3)) // Expected result [1, 3]
console.log(minMax(1, 2, 3, [100, 50])) // Expected result [1, 100]
console.log(minMax(1, 2, 3, [100, 50], [-2, 40, 200])) // Expected result [-2, 200]