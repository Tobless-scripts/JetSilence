import type jsType = require('../js.type');

/*
Code Examples:

TypeScript:
const MAX_SIZE = 100;
const PI = 3.14159;
const API_URL = "https://api.example.com";
→ Color affects: 100, 3.14159, "https://api.example.com" (constant values), true/false/null

Python:
MAX_SIZE = 100
PI = 3.14159
API_URL = "https://api.example.com"
→ Color affects: 100, 3.14159, "https://api.example.com" (constant values), True/False/None

PHP:
const MAX_SIZE = 100;
const PI = 3.14159;
const API_URL = "https://api.example.com";
→ Color affects: 100, 3.14159, "https://api.example.com" (constant values), true/false/null

Go:
const MaxSize = 100
const Pi = 3.14159
const ApiUrl = "https://api.example.com"
→ Color affects: 100, 3.14159, "https://api.example.com" (constant values), true/false/nil

Kotlin:
const val MAX_SIZE = 100
const val PI = 3.14159
const val API_URL = "https://api.example.com"
→ Color affects: 100, 3.14159, "https://api.example.com" (constant values), true/false/null

Java:
public static final int MAX_SIZE = 100;
public static final double PI = 3.14159;
public static final String API_URL = "https://api.example.com";
→ Color affects: 100, 3.14159, "https://api.example.com" (constant values), true/false/null

C:
#define MAX_SIZE 100
const int PI = 3.14159;
const char* API_URL = "https://api.example.com";
→ Color affects: 100, 3.14159, "https://api.example.com" (constant values), true/false/NULL

C++:
const int MAX_SIZE = 100;
const double PI = 3.14159;
const std::string API_URL = "https://api.example.com";
→ Color affects: 100, 3.14159, "https://api.example.com" (constant values), true/false/nullptr

C#:
const int MAX_SIZE = 100;
const double PI = 3.14159;
const string API_URL = "https://api.example.com";
→ Color affects: 100, 3.14159, "https://api.example.com" (constant values), true/false/null
*/

export const constants: jsType.TokenColorInterface[] = [
        // CONSTANTS
        {
                scope: [
                        "constant",
                        "constant.language",
                        "constant.character.escape"
                ],
                settings: {
                        foreground: "#FFD54F",
                        fontStyle: "medium"
                }
        }
];
