//create local node app that lets us populate a to-do list, lets us see what is in the list and ability to mark off
//array
//present to user
//what do you want to do next
//does not have to keep the data
//can use library we have already created

//user options
//	add to list
//	view list
//	remove from list

var userList = [];

var myFunction = {

	// property name : property value
	count : 1,

	displayContents : function(){

		console.log('\n');
		console.log('Displaying contents of user list ...');
		console.log('------------------------------------');
		for (count = 0; count <= userList.length; count++) {
			console.log('');
		}
	},

	addItem : function(){},

	removeItem : function(){}

}

// console.log('Select option by adding parameter while invoking program');
// console.log('view - View list');
// console.log('add - Add item to list');
// console.log('remove - Remove item from list');

// when invoking this program from the cmd line, type $ node [filename] [name-parameter] as this does not actually prompt user, instead it displays the [name-parameter] with the 'console.log' function
var userOption = process.argv[2];



if (userOption === 'add') {
	console.log('add');
} else if (userOption === 'view') {
	console.log('view');
	myFunction.displayContents();
} else if (userOption === 'remove') {
	console.log('remove');
} else {
	return;
}
