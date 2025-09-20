"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strings = void 0;
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

C:
char message[] = "Hello World";
char template[100];
sprintf(template, "Welcome %s!", name);
→ Color affects: "Hello World", "Welcome %s!" (all string literals)

C#:
string message = "Hello World";
string template = $"Welcome {name}!";
string multiline = @"
    This is a
    multiline string
";
→ Color affects: "Hello World", $"Welcome {name}!", @"..." verbatim string (all string content)

C++:
std::string message = "Hello World";
std::string template = "Welcome " + name + "!";
std::string multiline = R"(
    This is a
    multiline string
)";
→ Color affects: "Hello World", "Welcome ", raw string literal R"(...)" (all string content)
*/
//STRINGS
exports.strings = [
    {
        scope: ["string"],
        settings: {
            foreground: "#48865D",
            fontStyle: "medium"
        }
    }
];
