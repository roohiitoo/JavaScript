/*
https://tc39.es/ecma262/

https://262.ecma-international.org/5.1/#sec-11.4.3









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

//--------------------------------------------------------

//Operations
console.log(2+1);
console.log(2-1);
console.log(2*1);
console.log(2/1);
console.log(2%1);
console.log(2**1);
console.log(+true);
console.log(+"");

//some tricky operations
console.log("3"+ 4 + 5);
console.log(3 + 4 + "5");
console.log((3 + 4) * 5);

/* Operator precedence 
Unary operators
binary operators
prefix and postfix operators 
*/

//--------------------------------------------------------

//Comparision

console.log(21>11);
console.log(21>=11);
console.log(21<11);
console.log(21<=11);
console.log(21==11);
console.log(21!=11);


//--------------------------------------------------------

/* 
how data is save and access in memory thats how we differentiate the datatypes. 
callByValue and callByReference
primitive data types --> 7 types (String, Number, Boolean, null, undefined, Symbol, BigInt)
non primitive data types -->3 types  (Array, Objects, Functions)
*/