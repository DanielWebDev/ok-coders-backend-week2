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

var q, err = false;
var myArray = ['1','2',3,4,5];
var result = {question:0};


var ToDoList = {

	// property name : property value

	initFunction : function() {

		ToDoList.promptUser();

	  	if (err) {
	  		console.log('*** an error has occurred ***');
	  		return;
	  	} else {
			switch (result.question) {
				case 1:
					myFunction.displayContents();
				case 2:			
					console.log('add');
				case 3:
					console.log('complete');
				case q:// quit
					break;
				default:
					console.log('a valid seletion was not entered');
			}
		}
	},

	displayMenu : function() {

		console.log('select 1) Print ToDo, 2) Add ToDo, 3) Complete Todo');

	},

	displayList : function(){

		console.log('\n');
		console.log('Displaying contents ToDo list ...');
		console.log('------------------------------------');

		myArray.forEach(function(value){
		  	console.log(value);
		});

	},

	promptUser : function(){

		var prompt = require('prompt');// path not required as 
		//var result = 0;

		prompt.start();

		prompt.get([{
		    type: 'integer',
		    required: true

		  }], function (err, result) {

			  	console.log('result:', result.question);
		});

	},

	printList : function(){},

	addItem : function(){

		console.log('please enter item to be added');

	},

	deleteItem : function(){},

	displayError : function(){}

}// End 'ToDoObject' object declaration

	ToDoList.initFunction();
	
