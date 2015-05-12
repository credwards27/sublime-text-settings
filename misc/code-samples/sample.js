/* Block comment
*/

// Inline comment
function foo(args)
{
	var mBool = true;
	var mNum = 6;
	this.string = "string";

	this.bar = function() {};

	var re = /^ab[@ ]\d+.*?$/g;

	if (mBool === false)
	{
		return false;
	}
	else if (mNum || mBool)
	{
		this.string = "hello world";
	}
	
	for (var i=0; i<10; i++)
	{
		$(document);
	}
	switch (mNum)
	{
		case 5:
		break;

		default:
		return true;
	}
}

6 >>> 7;

foo.prototype = Array.prototype;
window.onload = function(e)
{
	console.log("loaded");
}
