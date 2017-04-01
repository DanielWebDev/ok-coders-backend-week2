// howMany, count are global
var howMany = 'First';
var count = 1;
var myFunction = {};

myFunction.first = function(num) {

	// cannot use 'num' outside of function
	console.log("this is my " + num + " function");
	num = 'Second';

	return num;
}

myFunction.counter = function() {
	if (count === 1) {
		count++;
		return "First";
	}

	return "Not First";
}

// use function as variable
myFunction.first(counter());
var result = myFirstFunction(counter());

console.log(result);