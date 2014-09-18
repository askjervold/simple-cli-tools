var input = require('yargs').argv;

var generateValues = function (args) {
	
	var keys = Object.keys(args);

	var min, max;

	if (keys.indexOf('min') === -1 || keys.indexOf('max') === -1) {
		return "Please enter both min and max values.";
	}
	else {
		min = args.min;
		max = args.max;
	}

	var growth = keys.indexOf('growth') != -1 ? args.growth : 0;
	var numValues = keys.indexOf('numValues') != -1 ? args.numValues : 1;
	var round = keys.indexOf('round') != -1 ? args.round : -1;

	var val = 0,
		output = '';

	for (var i = 0; i < numValues; i++) {
		val = Math.random()*(max-min)+min;
		if (round === 0) {
			val = Math.floor(val);
		}
		else if (round != -1) {
			val = val.toFixed(round);
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
	console.log('No tool or invalid tool selected. Please select a tool with --tool=nameOfTool. \nAvailable tools are:');
	var toolNames = Object.keys(tools);

	toolNames.forEach(function (tool) {
		console.log(tool);
	});
}