import type jsType = require('../js.type');

/*
Code Examples:

TypeScript (Invalid/Error):
// Syntax errors, type mismatches
let invalid: string = 123; // Type error
function broken( { // Invalid syntax

// Deprecated usage
@deprecated // Deprecated decorator
function oldMethod() {}
→ Color affects: 
        - Invalid syntax gets red underline
        - @deprecated and oldMethod() get strikethrough styling

Python (Invalid/Error):
# Syntax errors
def broken_function(
                pass  # Invalid indentation

# Deprecated
import warnings
@warnings.deprecated
def old_function():
                pass
→ Color affects: 
        - Syntax errors get red underline
        - @warnings.deprecated and old_function get strikethrough

PHP (Invalid/Error):
// Syntax errors
function broken() {
                echo "missing semicolon"
                return // Invalid return

// Deprecated
/**
 * @deprecated Use newMethod() instead

function oldMethod() { }
→ Color affects:
- Syntax errors get red underline
                                - @deprecated and oldMethod get strikethrough

Java(Invalid / Error):
// Compilation errors
public void broken() {
                                return "void method cannot return value"; // Error
}

// Deprecated
@Deprecated
public void oldMethod() { }
→ Color affects:
- Compilation errors get red underline
                                - @Deprecated and oldMethod get strikethrough styling

C (Invalid/Error):
// Syntax errors
int main() {
                printf("missing header") // Missing semicolon and #include
                return // Missing return value
}

// Deprecated (compiler attributes)
__attribute__((deprecated))
void oldFunction() { }
→ Color affects:
- Syntax errors get red underline
- __attribute__((deprecated)) and oldFunction get strikethrough

C++ (Invalid/Error):
// Compilation errors
class Broken {
                void method() {
                                return 42; // void method returning value
                }
};

// Deprecated
[[deprecated("Use newMethod instead")]]
void oldMethod() { }
→ Color affects:
- Compilation errors get red underline
- [[deprecated]] and oldMethod get strikethrough styling

C# (Invalid/Error):
// Compilation errors
public void Broken()
{
                return "void method cannot return"; // Error
                int x = "string"; // Type mismatch
}

// Deprecated
[Obsolete("Use NewMethod instead")]
public void OldMethod() { }
→ Color affects:
- Compilation errors get red underline
- [Obsolete] and OldMethod get strikethrough styling
                                                                
 */
export const validation: jsType.TokenColorInterface[] = [
        // INVALID/ERROR
        {
                scope: [
                        "invalid",
                        "invalid.illegal"
                ],
                settings: {
                        foreground: "#f44747",
                        fontStyle: "underline"
                }
        },

        // DEPRECATED
        {
                scope: [
                        "invalid.deprecated"
                ],
                settings: {
                        foreground: "#d4d4d4",
                        fontStyle: "strikethrough"
                }
        }
];
