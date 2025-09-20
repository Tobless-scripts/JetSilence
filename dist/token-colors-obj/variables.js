"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variables = void 0;
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

C:
char userName[] = "John";
int age = 25;
int isActive = 1;
→ Color affects: userName, age, isActive (variable names)

C++:
std::string userName = "John";
int age = 25;
bool isActive = true;
→ Color affects: userName, age, isActive (variable names)

C#:
string userName = "John";
int age = 25;
bool isActive = true;
→ Color affects: userName, age, isActive (variable names)
*/
exports.variables = [
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
