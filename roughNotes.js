/*
https://tc39.es/ecma262/







*/ 
//--------------------------------------------------------
//Conversion of DataTypes

// Suppose we are getting temparature value from backend but we don't know if the value is number type or string or anyother datatype. Sometimes we are unable to fetch value so it might possible that on UI will show 0 which actually wrong in this scenario. 
let temperature = "21";
temperature = undefined;

let valueInNumber = Number (temperature); 
console.log(valueInNumber);
console.log(typeof valueInNumber);
/* 
"21" = 21
"21Days" = NaN
"Ganesha" = NaN
true = 1
false  = 0
null = 0
undefined = NaN
*/

let isLoggedIn = "";

let booleanValue = Boolean(isLoggedIn);

console.log(booleanValue);
console.log(typeof booleanValue);

/*
1 = true
0 = false
"" = false
"JayGanesh" = true
 */


