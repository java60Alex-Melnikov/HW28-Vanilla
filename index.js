import { testframework } from "./testframework.js";
   testframework('isAnagram testing','const string = "hello"',
    ['isAnagram(string, "olleh")', 'isAnagram(string, "lehol")',
      'isAnagram(string, "ollle")', 'isAnagram(string, "hell")',
      'isAnagram(string, "oelhl")'
    ], [true, true, false, false, true]
   )