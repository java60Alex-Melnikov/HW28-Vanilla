function myParseInt(numStr, radix = 10) {
  if (typeof radix !== 'number' || radix < 2 || radix > 36) {
    return NaN;
  }
  
  numStr = String(numStr);
  
  let i = 0;
  while (i < numStr.length && numStr[i] === ' ') {
    i++;
  }
  
  if (i === numStr.length) return NaN; 
  
  let sign = 1;
  if (numStr[i] === '-' || numStr[i] === '+') {
    if (numStr[i] === '-') {
      sign = -1;
    }
    i++;
  }
  
  let foundDigit = false;
  let result = 0;
  for (; i < numStr.length; i++) {
    let char = numStr[i];

    if (char === ' ') break;
    let digit = -1;
    let code = numStr.charCodeAt(i);
    
    if (code >= 48 && code <= 57) { 
      digit = code - 48;
    }

    else if (code >= 65 && code <= 90) { 
      digit = code - 55;  
    }

    else if (code >= 97 && code <= 122) {
      digit = code - 87;  
    }
    
    if (digit < 0 || digit >= radix) {
      break;
    }
    
    foundDigit = true;
    result = result * radix + digit;
  }
  
  if (!foundDigit) return NaN;
  
  return sign * result;
}

console.log(`conversion string to number in decimal number system myParseInt("123")=123 ${myParseInt("123") == 123}`);
console.log(`conversion string to number in binary number system myParseInt("123",2)=1 ${myParseInt("123", 2) == 1}`);
console.log(`conversion string to number in 36-th number system myParseInt("z.", 36) = 35 ${myParseInt("z.", 36) == 35}`);
console.log(`conversion string to number in decimal number system myParseInt("123.6", 10) = 123 ${myParseInt("123.6", 10) == 123}`);
console.log(`NaN conversion if first symbol doesn't exist in the specified number system myParseInt(".z", 36)=NaN ${isNaN(myParseInt(".z", 36))}`);
console.log(`NaN conversion if radix is incorrect myParseInt("123", 37)=NaN ${isNaN(myParseInt("123", 37))}`);
console.log(`NaN conversion if radix is incorrect myParseInt("123", 1)=NaN ${isNaN(myParseInt("123", 1))}`);
console.log(`conversion string with spaces myParseInt(" 123 ")=123 ${myParseInt(" 123 ") == 123}`);
console.log(`conversion string with spaces myParseInt(" 12 3 ")=12 ${myParseInt(" 12 3 ") == 12}`);
console.log(`conversion empty string myParseInt("")=NaN ${isNaN(myParseInt(""))}`);
console.log(`conversion blank string myParseInt("  ")=NaN ${isNaN(myParseInt("  "))}`);
console.log(`conversion string with a negative number myParseInt("-123") = -123 ${myParseInt("-123") == -123}`);
console.log(`conversion if string is a number myParseInt(123) = 123 ${myParseInt(123) == 123}`);