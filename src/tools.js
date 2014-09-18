var input = require('yargs').argv;

var generateValues = function (args) {
	
	var min = parseFloat(args.min),
		max = parseFloat(args.max),
		growth = parseFloat(args.growth);

	var val = 0,
		output = '';

	for (var i = 0; i < args.numValues; i++) {
		val = Math.random()*(max-min)+min;
		if (args.round) {
			val = Math.floor(val);
		}
		else {
			val = val.toFixed(1);
		}

		if (i < args.numValues-1) {
			output += val + ', ';
		}
		else output += val;
		min += growth;
		max += growth;
	}

	return output;
}

var tools = {'generateValues': generateValues};

if (Object.keys(tools).indexOf(input.tool) != -1) {
	console.log(tools[input.tool](input));
}
else {
	console.log('No tool selected. Please select a tool with --tool=nameOfTool. \nAvailable tools are:');
	var toolNames = Object.keys(tools);

	toolNames.forEach(function (tool) {
		console.log(tool);
	});
}