function Person(name, address) {
	this.name = name;
	this.address = address;

	this.sayHello = function() {
		console.log(name + ", who lives at " + address + ", " + "says Hello");
	};
}

function init() {
	var lee = new Person("Daniel","123 Anystreet");
	lee.sayHello();
}

init();
