//
// COMMENTS
//

/* Block comment
*/

/**
 * Doc block comment.
 *
 * This has multiple lines and doc block tags.
 *
 * @param {string} title The title.
 */

// Inline comment

//
// VARIABLES
//

var undef,
	bool = true,
	int = 6,
	num = 7.5,
	dstr = "hello world",
	sstr = 'hello world',
	estr = "hello world\n",
	vNull = null,
	vNaN = NaN,
	re = /^ab[@ ]\d+.*?$/g,
	
	array = [],
	
	fullArray = [ "the", "array", "is", "full" ],
	
	obj = {},
	
	fullObj = {
		keyProp: "the property",
		"strProp": "the other property",
		
		methodProp: function() {
			return "i do things";
		}
	};

//
// METHOD CALLS
//

// Instance method
fullArray.join(",");

// Builtin method
parseInt(num, 10);
isNaN(vNaN);

// Regular function
foo(int, num);

//
// CONTROL
//

// If/else
if (num < 7) {
}
else if (num > 10) {
}
else {
}

// Ternary
num = 6 < 7 ? 0 : 1;

// Loops
for (var i=0, l=fullArray.length; i<l; ++i) {
}

for (var k in fullObj) {
}

while (--i) {
}

do {
}
while (false);

// Switch
switch (num) {
	case 5:
	break;
	
	default:
}

//
// OPERATORS
//

// Arithmetic
6 + 7;
7 - 6;
5 * 7;
45 / 9;
47 % 9;
6 ** 7;

// Bitwise
7 << 2;
7 >> 2;
7 >>> 2;
1 & 2;
1 ^ 2;
1 | 2;
1 ~ 2;

// Arithmetic assignment
num += 7;
num -= 6;
num *= 7;
num /= 9;
num %= 9;
num **= 7;

// Bitwise assignment
num <<= 2;
num >>= 2;
num >>>= 2;
num &= 2;
num ^= 2;
num |= 2;
num ~= 2;

// Increment/decrement
num++;
++num;
num--;
--num;

// Unary
+num;
-num;

// Special
delete fullArray[1];
void 0;

// Grouping
num = (7 + 6) - 4;

//
// RETRIEVAL
//

// Array index
fullArray[1];

// Object literal key
fullObj.keyProp;

// Object key
fullObj["strProp"];

// Object method calls
fullObj.methodProp();
fullObj["methodProp"]();

//
// COMPARISON
//

// Equality/inequality
6 > 7;
6 < 7;
6 >= 7;
6 <= 7;

6 == 7;
6 === 7;
6 != 7;
6 !== 7;

// Negation
!num;

// Type
typeof num;
instance instanceof MyClass;

//
// STATIC PROPERTIES
//

// Call object property function
Math.random();

// Prototype
Array.prototype;

// Prototype property
Array.prototype.indexOf;

// Instantiate class
var instance = new MyClass();

// Set constructor (builtin prototype property)
MyClass.prototype.contructor = MyClass;

// Static property on class
MyClass.myVar;

// ES6 class
class MyES6Class {
}

//
// ENVIRONMENT
//

window;
document;
console.log("output");

//
// CLASSES
//

function MyClass() {
	var mPrivate = 6;
	
	this.public = 5;
	
	this.method = function() {
		return "i'm a method";
	};
	
	function privateMethod() {
		return "i'm a private method";
	}
	
	(function() {
		console.log("initialize!");
	})();
}

//
// FUNCTIONS
//

function foo(arg1, arg2) {
	return bar(arg1, arg2) - bar(arg2, arg1);
}

function bar(num1, num2) {
	if (typeof num1 !== "number") {
		console.log("num1 not a number");
	}
	else if (typeof num2 !== "number") {
		console.log("num2 not a number");
	}
	
	if (num1 < num2 || num2 > num1) {
		console.log("not equal");
	}
	
	if (true && num1) {
		console.log("something");
	}
	else if (!num2) {
		console.log("something else");
	}
	
	// Add the numbers
	return num1 + num2;
}
