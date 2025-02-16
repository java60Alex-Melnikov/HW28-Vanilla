let array = ["abc", 23];

function forEach(array, fun) {
  for (let i = 0; i < array.length; i++) {
    fun(array[i], i);
  }
}

function print(elem, index) {
  console.log(`index: ${index}, element: ${elem}`);
}

forEach(array, print);
function some(array, fun) {
  for (let i = 0; i < array.length; i++) {
      if (fun(array[i], i)) {
          return true;
      }
  }
  return false; 
}

function every(array, fun) {
  for (let i = 0; i < array.length; i++) {
      if (!fun(array[i], i)) {
          return false; 
      }
  }
  return true; 
}

function evenNumber(num) {
  return typeof num === "number" && num % 2 === 0;
}

array = [2, 3, 4];
function elmGreaterIndex(elem, index) {
  return elem > index;
}

let array2 = [1, 2, 3, 4, 5];
let arrayEven = [2, 4, 6, 8, 10]
console.log("Some:");
console.log(`using "some" function for even numbers array: ${array}, function ${evenNumber}, result: ${some(array, evenNumber)} - false`)
console.log(some(array2, x => x > 3)); //Expected result: true, since 4 and 5 > 3
console.log(some(array2, x => x > 5)); //Expected result: false, since no numbers > 5
console.log(some([], x => x > 0));              //Expected result: false, since array is empty
console.log(some(["abc"], x => x > 5));         //Expected result: false, since "abc" is NaN

console.log("Every:");
console.log(`using "every" function for elements greater than the index values, array: ${array}, function ${elmGreaterIndex}, result: ${every(array, elmGreaterIndex)} - true`)
console.log(every(array2, x => x > 0)); //Expected result: true, since all numbers are bigger than 0
console.log(every(array2, x => x % 2 == 0)); //Expected result: false, since  only 2 and 4 % 2 will == 0
console.log(every(["abc"], x => x > 5));         //Expected result: false, since "abc" is NaN