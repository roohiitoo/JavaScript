/* 
In JavaSCript we can define variables by 3 types.
const variableName = value;
var variableName = value; 
let variableName = value;

"const variableName" is called variable declaration
"= value" is called variable initialization.

--------------------------------------------------------
The rules we must follow when naming variables in JavaScript are as follows:

Names can only contain alphanumeric characters (a-z, A-Z, 0-9) and the _ (underscore) and $ (dollar sign) characters; nothing else. Hence, first-name is invalid since it contains a hyphen (-) which is illegal to put in a variable name.

Names can't begin with a digit. Hence, "2nd" is invalid.
Names can't contain spaces. Hence, "first word" is invalid.
Names can't be reserved keywords. Hence, "var" is invalid.

--------------------------------------------------------
Some common casing conventions are as follows:

camelCasing: every word's first letter is uppercased except for that of the first word. Camel casing is the casing used in JavaScript. Here are some identifier names from JavaScript: indexOf, getElementById, querySelectorAll.

PascalCasing: every word's first character is uppercased. C# uses Pascal casing for almost all identifiers. Some examples from C# are as follows: WriteLine, ReadLine, GetType.

snake_casing: every word is lowercased and separated from the other using the _ (underscore) character. PHP uses snake casing for most of its predefined functions. Some examples from PHP are as follows: array_push, mysqli_connect, str_split.

SCREAMING_SNAKE_CASING: every word is uppercased and separated from the other using the _ (underscore) character. This casing is commonly used to denote constants in many programming languages, including JavaScript. Some examples are: MAX_VALUE, MAX_SAFE_INTEGER.

--------------------------------------------------------
Executing all var declaration statements before any other statement in JavaScript is referred to as variable hoisting.
JavaScript only hoists variable declarations, NOT the initializations within the declaration statements.

console.log(str);
var str2 = 'Hoisting';
ANS - undefined

--------------------------------------------------------
var variableName = value;

The var keyword is followed by the name of the variable to create (denoted as variableName), followed by an equals sign (=), followed by the initial value to assign to the variable (denoted as value).

Variations of using var:
var variableName1 = value1;
var variableName2 = value2;
var variableName3 = value3;

var variableName1 = value1,
    variableName2 = value2,
    variableName3 = value3; When a variable definition ends with a comma (,), it means that more variable definitions follow along. It's only when we put a semicolon (;) in the end that the parser figures out that the variable definitions have ended.

var variableName1, variableName2, variableName3;

--------------------------------------------------------
let variableName = value;

The let keyword was introduced in JavaScript with the advent of ECMAScript 6. It's a new way of defining variables.

let declarations are not hoisted.

Accessing a let variable before its declaration leads to an error; the standard refers to such a scenario as a temporal dead zone.
The temporal dead zone for a given let variable is simply referred to the region prior to the variable's declaration in the source code, where we can NOT access the variable.
The way the engine is able to determine the temporal dead zone for a let variable is by analyzing all let declarations before running the code. Then the region before the let declaration becomes a temporal dead zone for the respective variable.

--------------------------------------------------------
const variableName = value;

The 'const' keyword is used to define constants in JavaScript.
A constant is a container of data that can't be changed during the course of a program.

As per the definition of a constant, it's invalid to assign a value to it later on in a program after it's defined.
A constant can't be defined without an initializer value.
It's also impossible to redeclare a constant in JavaScript.

whenever naming a constant, use the screaming snake casing convention.
const VALUE_OF_PI = 3.14;


*/
