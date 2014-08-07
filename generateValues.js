function generateValues(numValues, lowerBound, higherBound, growth, round) {
	var min = parseFloat(lowerBound),
		max = parseFloat(higherBound),
		growth = parseFloat(growth);

	var val = 0,
		output = '';

	for (var i = 0; i < numValues; i++) {
		val = Math.random()*(max-min)+min;
		if (round) {
			val = Math.floor(val);
		}
		else {
			val = val.toFixed(1);
		}

		if (i < numValues-1) {
			output += val + ', ';
		}
		else output += val;
		min += growth;
		max += growth;
	}

	console.log(output);
}

generateValues.apply(null, process.argv.slice(2));