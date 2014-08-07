simple-js-tools
===============

A repository for simple JavaScript tools that I might want to use multiple times without re-coding them.

### generateValues
Command-line interface for generating a comma-separated string of values. Run with:
>```node generateValues.js *args*```

***args* (numValues lowerBound upperBound growth round):**
- *numValues*: The number of values you want to generate.
- *lowerBound*: The (initial) lower bound of the range you want to generate values in.
- *upperBound*: The (initial) upper bound of the range you want to generate values in.
- *growth*: If you want to generate gradually larger/smaller values, add a non-zero growth. The growth will be added to the lower and upper bounds after each generated number to use a higher or lower range.
- *round*: If you want only integer values, supply a truthy value for this argument. Otherwise, the values will be rounded to a single decimal.