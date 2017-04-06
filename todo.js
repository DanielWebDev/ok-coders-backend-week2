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

var myArray = ['1','2',3,4,5]

var myFunction = {

	// property name : property value
	count : 1,

	displayContents : function(){

		console.log('\n');
		console.log('Displaying contents of user list ...');
		console.log('------------------------------------');

		//var ToDoList = ['one','two','three'];


			myArray.forEach(function(value){
			  console.log(value);
		});

	},

	addItem : function(){

		console.log('please enter item to be added');

	},

	removeItem : function(){}

}

//
// get input
//
var prompt = require('prompt');// path not required as 
var result = 0;

prompt.start();

console.log('select 1) Print ToDo, 2) Add ToDo, 3) Complete Todo');
prompt.get([{
    type: 'integer',
    required: true
  }], function (err, result) {
  	if (err) {
  		console.log('*** an error has occurred ***');
  		return;
  	} else {
  //console.log('Input received:');
  //console.log(JSON.stringify(result, null, 2));

  		console.log('result:', result.question);

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

});
