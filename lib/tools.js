var input = require('yargs').argv;
var generateValues = require('./generateValues.js');
var tools = {
	'generateValues': {
		'fun': generateValues,
		'args': ['min', 'max', '?growth', '?round', '?numValues']
	}
};

if (Object.keys(tools).indexOf(input.tool) != -1) {
	console.log(tools[input.tool].fun(input));
}
else {
	console.log('No tool or invalid tool selected. Please select a tool with --tool=nameOfTool. \nAvailable tools are:');
	var toolNames = Object.keys(tools);

	toolNames.forEach(function (tool) {
		console.log(tool + ' (' + tools[tool].args.join(', ') + ')');
	});
}