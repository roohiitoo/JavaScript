/*
https://tc39.es/ecma262/

https://262.ecma-international.org/5.1/#sec-11.4.3

https://theheadstarter.com/

https://cursor.sh/

https://www.lightgalleryjs.com/jquery-to-js-converter/

https://quickref.me/

https://www.logome.ai/




*/
//--------------------------------------------------------
//Conversion of DataTypes

// Suppose we are getting temparature value from backend but we don't know if the value is number type or string or anyother datatype. Sometimes we are unable to fetch value so it might possible that on UI will show 0 which actually wrong in this scenario.
let temperature = "21";
temperature = undefined;

let valueInNumber = Number(temperature);
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
console.log(2 + 1);
console.log(2 - 1);
console.log(2 * 1);
console.log(2 / 1);
console.log(2 % 1);
console.log(2 ** 1);
console.log(+true);
console.log(+"");

//some tricky operations
console.log("3" + 4 + 5);
console.log(3 + 4 + "5");
console.log((3 + 4) * 5);

/* Operator precedence 
Unary operators
binary operators
prefix and postfix operators 
*/

//--------------------------------------------------------

//Comparision

console.log(21 > 11);
console.log(21 >= 11);
console.log(21 < 11);
console.log(21 <= 11);
console.log(21 == 11);
console.log(21 != 11);

//--------------------------------------------------------

/* 
how data is save and access in memory thats how we differentiate the datatypes. 
callByValue and callByReference
primitive data types --> 7 types (String, Number, Boolean, null, undefined, Symbol, BigInt)
non primitive data types -->3 types  (Array, Objects, Functions)
*/

//--------------------------------------------------------

/* Memory
Stack - primitive datatypes - we get copy of data
Heap - Non primitive datatype - we get reference of data

so whatever variable we declaired is saved in stack memory for example
let userName = "Ganesha";
let newUserName = userName ;
newUserName = "Bappa";

So if you console log both userName and newUserName you will get Ganesha and Bappa respectively because in stack memory we get copy of memory and even if we change the value of newUserName the original value of userName stays as it is.

In Heap memory we get the reference of the moemory for example:

let productSpecification = {
    price : 21,
    DOM : "20 March 2024";
}

let newProductSpecification = productSpecification;

newProductSpecification.DOM = "12 May 2024";

here if we cosole log DOM for both the product we will get the same value as "12 May 2024" because here we get the reference of object stored in memory which is same for both the object and as we changed the value of DOM through newProductSpecification it reflects for productSpecificaton as well.

--------------------------------------------------------

Your explanation about stack and heap memory is generally accurate, but there are some nuances to be aware of.

In JavaScript, primitive data types like strings and numbers are indeed stored in the stack, and when you assign a primitive variable to another, a copy of the value is made. This is why when you modify `newUserName`, `userName` remains unchanged.

```javascript
let userName = "Ganesha";
let newUserName = userName;
newUserName = "Bappa";

console.log(userName);      // Output: Ganesha
console.log(newUserName);   // Output: Bappa
```

However, your explanation about objects (which are non-primitive data types) and memory references needs a slight correction. In JavaScript, objects are stored in the heap, but what gets stored in a variable is a reference to the object's location in memory, not the object itself.

So, when you do:

```javascript
let productSpecification = {
    price: 21,
    DOM: "20 March 2024"
};

let newProductSpecification = productSpecification;
newProductSpecification.DOM = "12 May 2024";

console.log(productSpecification.DOM);           // Output: 12 May 2024
console.log(newProductSpecification.DOM);        // Output: 12 May 2024
```

Both `productSpecification` and `newProductSpecification` are referencing the same object in memory. So, when you modify `DOM` through `newProductSpecification`, it reflects in `productSpecification` as well, because they are pointing to the same memory location.

If you want `newProductSpecification` to be a separate copy of `productSpecification`, you need to perform a deep copy, which means copying the entire object and its properties, not just the reference. There are various ways to achieve this in JavaScript, such as using libraries like `lodash` or writing custom functions.



*/

/* 
Today I took off 
revise privious concepts

15/5 NM

Home layout 

70+ JavaScript Challenges: Data Structures & Algorithms
17/5
DSA day 1
DSA day 2
DSA day 3
DSA day 4
DSA day 5
DSA day 6
DSA day 7
DSA day 8
DSA day 9
DSA day 10
DSA day 11
DSA day 12
DSA day 13
DSA day 14
DSA day 15
DSA day 16
DSA day 17
DSA day 18
DSA day 19
DSA day 20
DSA day 21
DSA day 22
DSA day 23
DSA day 24
DSA day 25
DSA day 25
DSA day 26
DSA day 27
DSA day 28
DSA day 29
DSA day 30
DSA day 31
DSA day 32
DSA day 33
DSA day 34
DSA day 35
DSA day 36
DSA day 37
DSA day 38
DSA day 39
DSA day 40
DSA day 41
DSA day 42
DSA day 43
DSA day 44
DSA day 45
DSA day 46
DSA day 47
DSA day 48
DSA day 49
DSA day 50
DSA day 51
DSA day 52
DSA day 53
DSA day 54
DSA day 55
DSA day 56
DSA day 57
DSA day 58
DSA day 59
DSA day 60
DSA day 61
DSA day 62
DSA day 63
DSA day 64
DSA day 65
DSA day 66
DSA day 67
DSA day 68
DSA day 69
DSA day 70
DSA day 71
DSA day 72
DSA day 73
DSA day 74
DSA day 75
DSA day 76
DSA day 77
DSA day 78
DSA day 79
DSA day 80
DSA day 81
DSA day 82
DSA day 83
DSA day 84
DSA day 85
DSA day 86
DSA day 87
DSA day 88
DSA day 89
DSA day 90
DSA day 91
DSA day 92
DSA day 93
DSA day 94
DSA day 95
DSA day 96
DSA day 97
DSA day 98
DSA day 99
DSA day 100
DSA day 101
DSA day 102
DSA day 103
DSA day 104
DSA day 105
DSA day 106
Break
DSA day 107
DSA day 108
DSA day 109
DSA day 110
DSA day 111
DSA day 112
DSA day 113


DSA day 1






*/
/*
STEPS to FOLLOW
first save the code here 
then copy the same line and paste sourse control input box [inside left 3rd icon]
then click on commit --> Yes 
then click on sync --> ok 
done
*/

console.log();
