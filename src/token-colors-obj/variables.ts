import type jsType = require('../js.type');

/*
Code Examples:

TypeScript:
let userName: string = "John";
const age: number = 25;
var isActive: boolean = true;
→ Color affects: userName, age, isActive (variable names)

Python:
user_name = "John"
age = 25
is_active = True
→ Color affects: user_name, age, is_active (variable names)

PHP:
$userName = "John";
$age = 25;
$isActive = true;
→ Color affects: $userName, $age, $isActive (variable names including $)

Go:
var userName string = "John"
age := 25
isActive := true
→ Color affects: userName, age, isActive (variable names)

Kotlin:
val userName: String = "John"
var age: Int = 25
val isActive: Boolean = true
→ Color affects: userName, age, isActive (variable names)

Java:
String userName = "John";
int age = 25;
boolean isActive = true;
→ Color affects: userName, age, isActive (variable names)
*/

export const variables: jsType.TokenColorInterface[] = [
        // VARIABLES
        {
                scope: [
                        "variable",
                        "variable.other",
                        "variable.language"
                ],
                settings: {
                        foreground: "#41A5CB",
                        fontStyle: "medium"
                }
        }
];
