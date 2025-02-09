function sumDigits(num) {
    const n = Number(num);
    const result = Math.floor(Math.abs(n));
    return String(result)
    .toString()
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0);
  }
  console.log(sumDigits(123));      
  console.log(sumDigits("123"));    
  console.log(sumDigits(-123));     
  console.log(sumDigits(123.3333)); 
  console.log(sumDigits("b123"));   
  console.log(sumDigits("123b"));
  console.log(sumDigits("b"));
  
  function displayAnanas() {
    const und = String(sumDigits("b")).toLowerCase();
    console.log("a" + und + "as");
  }
  displayAnanas();   