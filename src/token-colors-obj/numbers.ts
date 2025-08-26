import type jsType = require('../js.type');

/*
Code Examples:

TypeScript:
const age = 25;
const price = 19.99;
const hex = 0xFF;
const binary = 0b1010;
const octal = 0o777;
const scientific = 1.5e10;
→ Color affects: 25, 19.99, 0xFF, 0b1010, 0o777, 1.5e10 (all numeric literals)

Python:
age = 25
price = 19.99
hex_val = 0xFF
binary = 0b1010
octal = 0o777
scientific = 1.5e10
→ Color affects: 25, 19.99, 0xFF, 0b1010, 0o777, 1.5e10 (all numeric literals)

PHP:
$age = 25;
$price = 19.99;
$hex = 0xFF;
$binary = 0b1010;
$octal = 0777;
$scientific = 1.5e10;
→ Color affects: 25, 19.99, 0xFF, 0b1010, 0777, 1.5e10 (all numeric literals)

Go:
age := 25
price := 19.99
hex := 0xFF
binary := 0b1010
octal := 0o777
scientific := 1.5e10
→ Color affects: 25, 19.99, 0xFF, 0b1010, 0o777, 1.5e10 (all numeric literals)

Kotlin:
val age = 25
val price = 19.99
val hex = 0xFF
val binary = 0b1010
val scientific = 1.5e10
→ Color affects: 25, 19.99, 0xFF, 0b1010, 1.5e10 (all numeric literals)

Java:
int age = 25;
double price = 19.99;
int hex = 0xFF;
int binary = 0b1010;
int octal = 0777;
double scientific = 1.5e10;
→ Color affects: 25, 19.99, 0xFF, 0b1010, 0777, 1.5e10 (all numeric literals)

C:
int age = 25;
double price = 19.99;
int hex = 0xFF;
int binary = 0b1010;
int octal = 0777;
double scientific = 1.5e10;
float suffix = 19.99f;
→ Color affects: 25, 19.99, 0xFF, 0b1010, 0777, 1.5e10, 19.99f (all numeric literals)

C#:
int age = 25;
double price = 19.99;
int hex = 0xFF;
int binary = 0b1010;
int octal = 0777;
double scientific = 1.5e10;
decimal money = 19.99m;
→ Color affects: 25, 19.99, 0xFF, 0b1010, 0777, 1.5e10, 19.99m (all numeric literals)

C++:
int age = 25;
double price = 19.99;
int hex = 0xFF;
int binary = 0b1010;
int octal = 0777;
double scientific = 1.5e10;
float suffix = 19.99f;
long long bigNum = 123456789LL;
→ Color affects: 25, 19.99, 0xFF, 0b1010, 0777, 1.5e10, 19.99f, 123456789LL (all numeric literals)
*/

// NUMBERS
export const numbers: jsType.TokenColorInterface[] = [
        {
                scope: [
                        "constant.numeric",
                        "constant.language.numeric"
                ],
                settings: {
                        foreground: "#417FBB",
                        fontStyle: "italic"
                }
        }
];