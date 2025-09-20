"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comments = void 0;
/*
Code Examples:

TypeScript:
// Single line comment
/* Multi-line comment */
/**
 * JSDoc comment
 * @param name - User name
 * @returns greeting message
 
function greet(name: string): string {
        return `Hello ${name}!`;
}
→ Color affects: All comment text(single - line, multi - line, JSDoc) with italic styling

Python:
# Single line comment
"""
Multi - line docstring
This describes the function
"""
def greet(name: str) -> str:
return f"Hello {name}!"
→ Color affects: All comment text and docstrings with italic styling

PHP:
// Single line comment
/* Multi-line comment */
/**
 * PHPDoc comment
 * @param string $name User name
 * @return string greeting message
 
function greet($name) {
        return "Hello $name!";
}
→ Color affects: All comment text and PHPDoc with italic styling

Go:
// Single line comment
/* Multi-line comment
// Function greets a user
func greet(name string) string {
        return fmt.Sprintf("Hello %s!", name)
}
→ Color affects: All comment text with italic styling

Kotlin:
// Single line comment
/* Multi-line comment */
/**
 * KDoc comment
 * @param name User name
 * @return greeting message
 
fun greet(name: String): String {
        return "Hello $name!"
}
→ Color affects: All comment text and KDoc with italic styling

Java:
// Single line comment
/* Multi-line comment */
/**
 * Javadoc comment
 * @param name User name
 * @return greeting message
 
public String greet(String name) {
        return "Hello " + name + "!";
}
→ Color affects: All comment text and Javadoc with italic styling

C:
// Single line comment
/* Multi-line comment */
/**
 * Function documentation
 * @param name User name pointer
 * @return formatted greeting string

char* greet(const char* name) {
        char* result = malloc(50);
        sprintf(result, "Hello %s!", name);
        return result;
}
→ Color affects: All comment text with italic styling

C++:
// Single line comment
/* Multi-line comment */
/**
 * Doxygen comment
 * @param name User name
 * @return greeting string
 
std::string greet(const std::string& name) {
        return "Hello " + name + "!";
}
→ Color affects: All comment text and Doxygen with italic styling

C#:
// Single line comment
/* Multi-line comment */
/// <summary>
/// XML documentation comment
/// </summary>
/// <param name="name">User name</param>
/// <returns>Greeting message</returns>
// public string Greet(string name) {
//         return $"Hello {name}!";
// }
// → Color affects: All comment text and XML documentation with italic styling
// COMMENTS
exports.comments = [
    {
        scope: [
            "comment",
            "comment.line",
            "comment.block"
        ],
        settings: {
            foreground: "#9b9b9bff",
            fontStyle: "italic"
        }
    }
];
