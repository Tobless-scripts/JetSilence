import type jsType = require('../js.type');

/*
Code Examples:

TypeScript:
let sum = a + b;
let isEqual = x === y;
let isGreater = a > b && c < d;
→ Color affects: +, ===, >, &&, <, = (operators)

Python:
sum = a + b
is_equal = x == y
is_greater = a > b and c < d
→ Color affects: +, ==, >, and, <, = (operators)

PHP:
$sum = $a + $b;
$isEqual = $x === $y;
$isGreater = $a > $b && $c < $d;
→ Color affects: +, ===, >, &&, <, = (operators)

Go:
sum := a + b
isEqual := x == y
isGreater := a > b && c < d
→ Color affects: :=, +, ==, >, &&, < (operators)

Kotlin:
val sum = a + b
val isEqual = x == y
val isGreater = a > b && c < d
→ Color affects: +, ==, >, &&, <, = (operators)

Java:
int sum = a + b;
boolean isEqual = x == y;
boolean isGreater = a > b && c < d;
→ Color affects: +, ==, >, &&, <, = (operators)
*/

export const operators: jsType.TokenColorInterface[] = [
        // OPERATORS
        {
                scope: [
                        "keyword.operator",
                        "keyword.operator.arithmetic",
                        "keyword.operator.logical",
                        "keyword.operator.comparison"
                ],
                settings: {
                        foreground: "#B0BEC5",
                        fontStyle: "medium"
                }
        }
];
