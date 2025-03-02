function myReduce(array, callback, initialValue) {
  let acc = initialValue == undefined ? array[0] : initialValue;
  const index = initialValue == undefined  ? 1 : 0;
  for (let i = index; i < array.length; i++) {
    acc = callback(acc, array[i], i, array);
  }
  return acc;
}
function minMax(arr){
  const res = myReduce(arr, (acc, curr) => [acc[0] > curr ? curr : acc[0] , acc[1] < curr ? curr : acc[1]],
   [arr[0], arr[0]]);
  return res;
}

function test(testObj) {
  const expectedJSON = JSON.stringify(testObj.expected);
  let evalRes;
  try {
      evalRes = eval(testObj.script);
     
  } catch (error) {
      evalRes = error;
  }
  const actualJSON = JSON.stringify(evalRes);
  const result = expectedJSON === actualJSON ? 'passed' : 'failed';
  const testResult = createTestResult(testObj.script, expectedJSON, actualJSON, result);
  return testResult;
}
function createTestResult(script, expectedJSON, actualJSON, result) {
  return {script, expectedJSON, actualJSON, result};
}
function testframework(scripts, expectedResults) {
  const bodyElem = document.querySelector('body');
  const ol = document.createElement('ol');
  let passedCount = 0;
  let failedCount = 0;
  
  for (let i = 0; i < scripts.length; i++) {
    const testResult = test({ script: scripts[i], expected: expectedResults[i] });
    const li = document.createElement('li');
    li.textContent = `Script: ${testResult.script} | Expected: ${testResult.expectedJSON} | Actual: ${testResult.actualJSON} | Result: ${testResult.result}`;
    
    if (testResult.result === 'passed') {
      li.style.color = 'green';
      passedCount++;
    } else {
      li.style.color = 'red';
      failedCount++;
    }
    
    ol.appendChild(li);
  }

  const summary = document.createElement('p');
  summary.innerHTML = `<strong>Summary:</strong> <span style="color: green;">${passedCount} passed</span>, <span style="color: red;">${failedCount} failed</span>`;
  
  bodyElem.appendChild(ol);
  bodyElem.appendChild(summary);
}
const scripts = [
  'minMax(["hello", "kuku", "abc"])',
  'minMax([1, 2, 3])'
];
const expectedResults = [
  ["abc", "kuku"],
  [1, 3]
];
testframework(scripts, expectedResults);