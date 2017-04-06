var prompt = require('./node_modules/prompt');

prompt.start();

prompt.get([{
    name: 'select 1) Print ToDo, 2) Add ToDo, 3) Complete Todo',
    type: 'integer',
    required: true
  }], function (err, result) {
  //console.log('Input received:');
  //console.log(JSON.stringify(result, null, 2));
});

