simple-cli-tools
===============

A repository for simple Node.js CLI tools that I might want to use multiple times without re-coding them.

## Installation
```
git clone git@github.com:askjervold/simple-cli-tools.git
cd simple-cli-tools
npm install
```

## Usage
```
node lib/tools.js --tool=toolName --opt=value
```
Options/arguments prefixed with a '?' are optional.

### generateValues _(min max ?growth ?round ?numValues)_:
Generate a comma-separated list of values.
- **min**: The (initial) lower bound of the range you want to generate values in.
- **max**: The (initial) exclusive upper bound of the range you want to generate values in.
- **growth**: *Optional.* If you want to generate gradually larger/smaller values, you can declare a non-zero growth. The growth will be added to the lower and upper bounds after each generated number to use a higher or lower range.
- **round**: *Optional.* How many decimals to round to. Default is no rounding. 0 will generate integers.
- **numValues**: *Optional.* The number of values you want to generate.