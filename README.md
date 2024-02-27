## Xpress Language Specification

### Importing Functions

Use the `import` keyword to import functions from external .xpr files:

```xpress
// Import all functions from lib.xpr file
import "lib"
```

With this addition, your Xpress framework allows users to modularize their code by importing functions from external files, enhancing code organization and reusability.

### Function Definitions

Define functions using the `fun` keyword. Functions can take parameters, perform operations, and return values.

```xpress
fun functionName(param1: type, param2: type, ...) {
    // Function body
    // Perform operations here
    return [result]
}
```

- `functionName`: The name of the function.
- `param1`, `param2`, ...: Parameters with their respective types.
- `result`: The value to return from the function, enclosed in square brackets `[]`.

### Function Calls

To call a function, use the following syntax:

```xpress
result = functionName(param1: [expr1], param2: [expr2], ...)
```

- `functionName`: The name of the function to call.
- `param1: [expr1]`, `param2: [expr2]`, ...: Provide arguments for each parameter in square brackets `[]`.

### Variable Assignments

Assign values to variables using the assignment operator `=`:

```xpress
var variableName = [expression]
```

Here's an example of variable assignment and re-assignment using a function call:

```xpress
var total = calculateTotal(num1: [10.0], num2: [20.0], num3: [30.0])
average = calculateAverage(total: [total], count: [3])
```

### Inline Functions

Define inline functions with parameters and a body within curly braces.

Use the `return` keyword to specify the return value.

```xpress
var n = sum(a: [1], b: [2])
```

### Conditional Statements

Use `if`, `else if`, and `else` keywords for conditional statements.

Provide expressions in square brackets for condition evaluation.

```xpress
if [expression] {
    // Actions
} else if [expression] {
    // Actions
} else {
    // Else actions
}
```

### Switch Cases

Use the `switch` keyword to create a switch statement.

Specify cases using `case` followed by an expression and curly braces for actions.

Use `else` to define actions for cases that don't match any expression.

```xpress
when {
  [expression1]: {
    // Actions for expression1
  }
  [expression2]: {
    // Actions for expression2
  }
  else: {
    // Actions if no expression matches
  }
}
```

### Iterations

```xpress
// expression that results in an array/list
for (item:"item", index:"Index") in [array] {
  // iterate over each item in array / set
}
// expression that results in map/object
for (key:"key", value:"value", index: "index", regex:"regex") in [map] {
  // iterate over items in a dictionary / object
}
```
