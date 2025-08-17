import type jsType = require('../js.type');

/*
Code Examples:

TypeScript:
const message = "Hello World";
const template = `Welcome ${name}!`;
const multiline = `
    This is a
    multiline string
`;
→ Color affects: "Hello World", `Welcome ${name}!`, multiline template string (all string content)

Python:
message = "Hello World"
template = f"Welcome {name}!"
multiline = """
    This is a
    multiline string
"""
→ Color affects: "Hello World", f"Welcome {name}!", multiline triple-quoted string (all string content)

PHP:
$message = "Hello World";
$template = "Welcome $name!";
$multiline = "
    This is a
    multiline string
";
→ Color affects: "Hello World", "Welcome $name!", multiline string (all string content)

Go:
message := "Hello World"
template := fmt.Sprintf("Welcome %s!", name)
multiline := `
    This is a
    multiline string
`
→ Color affects: "Hello World", "Welcome %s!", raw string literal (all string content)

Kotlin:
val message = "Hello World"
val template = "Welcome $name!"
val multiline = """
    This is a
    multiline string
""".trimIndent()
→ Color affects: "Hello World", "Welcome $name!", triple-quoted string (all string content)

Java:
String message = "Hello World";
String template = String.format("Welcome %s!", name);
String multiline = """
    This is a
    multiline string
    """;
→ Color affects: "Hello World", "Welcome %s!", text block (all string content)
*/

//STRINGS
export const strings: jsType.TokenColorInterface[] = [
        {
                scope: ["string"],
                settings: {
                        foreground: "#48865D",
                        fontStyle: "medium"
                }
        }
];