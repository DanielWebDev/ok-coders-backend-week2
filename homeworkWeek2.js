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

var choice;

var myFunction = {

	// property name : property value
	count : 1,

	first : function(num){
		console.log("this is my " + num + " function");
		num = 'Second';
		return num;			
	},

	displayContents : function(){},

	addItem : function(){},

	deleteItem : function(){},

	displayOptions : function(num){

		console.log('Please select an option ...');
		console.log('View list - press 1');
		console.log('Add to list - press 2');
		console.log('Remove from list - press 3');

		//return prompt('what is your choice?');

		  var prompt = require('prompt');
		 
		  prompt.start();// start prompt
		 
		  prompt.get(['username', 'email'], function (err, result) {
		    // 
		    // Log the results. 
		    // 
		    console.log('Command-line input received:');
		    console.log('  username: ' + result.username);
		    console.log('  email: ' + result.email);
		  });

	},

	promptUser : function() {
		
	},

	counter : function() {
		if (this.count === 1) { 
			this.count++;
			return "First";
		}

		return "Not First";
	}
}

// use function as variable
//myFunction.first(myFunction.counter());
//var result = myFunction.first(myFunction.counter());

//console.log(result);

myFunction.displayOptions(choice);
myFunction.promptUser(choice);
