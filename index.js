import {testframework} from './testframework.js'
testframework('mergeObjects testing', 'const obj1={x:2, y:3}; const obj2={z:1, i:-10}; const obj3 = {x:10, y:30}',
  ['mergeObjects(obj1, obj2, true)','mergeObjects(obj1,obj3,true)', 'mergeObjects(obj1,obj3,false)'],
  [{x:2, y:3, z:1, i:-10},
    {x:2, y:3},
    {x:10, y:30}
  ]
)
  testframework('isAnagram testing','const string = "hello"',
   ['isAnagram(string, "olleh")', 'isAnagram(string, "lehol")',
     'isAnagram(string, "ollle")', 'isAnagram(string, "hell")',
     'isAnagram(string, "oelhl")'
   ], [true, true, false, false, true]
  )
const arr = [1, 2, 3];
let first = 1;
let second = 2;
[first, second] = [arr[1], arr[0]];
console.log(`second = ${second}`) //should be printed out 1
console.log(`first = ${first}`) //should be printed out 2