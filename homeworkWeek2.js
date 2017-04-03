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

var userChoice, x;
var userList = [];

var myFunction = {

	// property name : property value
	count : 1,

	// first : function(num){
	// 	console.log("this is my " + num + " function");
	// 	num = 'Second';
	// 	return num;			
	// },

	displayContents : function(){

		//console.log('');
		console.log('Displaying contents of user list ...');
		console.log('------------------------------------');
		for (count = 0; count <= userList.length; count++) {
			console.log('');
		}
	},

	addItem : function(){

	  	var prompt = require('what content would you like add to the list?');
	  	prompt.start();// start prompt

	  	prompt.get(['value'], function (err, result) {
		    // Log the results. 
		    // console.log('Command-line input received:');
		    // console.log('  value ' + result.value);

		    count = 0;

		    userList[count] = result.value;

	  });

	},

	deleteItem : function(){},

	promptUser : function(num){

		var result;

		console.log('\n');
		console.log('Please select an option and press enter ...');
		console.log('1 - View list');
		console.log('2 - Add item to list');
		console.log('3 - Remove item from list');

	  	var prompt = require('prompt');
	  	prompt.start();// start prompt
	 
	  	prompt.get(['value'], function (err, result) {
		    // Log the results. 
		    //console.log('Command-line input received:');
		    //console.log('  value ' + result.value);

		    userChoice = result.value;

			if (userChoice === 1) {
				myFunction.displayContents();
			}
	  });

	},

	// counter : function() {
	// 	if (this.count === 1) { 
	// 		this.count++;
	// 		return "First";
	// 	}

	// 	return "Not First";
	// }
}

//while (userChoice !== 1 || userChoice !== 2 || userChoice !== 3) {

	myFunction.promptUser();
	//myFunction.displayContents();

	if (userChoice === 2) myFunction.addItem();

	if (userChoice === x) return;// exit program if user enters 'x'

//}
