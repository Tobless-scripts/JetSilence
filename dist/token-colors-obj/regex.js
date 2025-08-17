"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regex = void 0;
/*
Code Examples:

TypeScript:
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
→ Color affects: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, /^\d{3}-\d{3}-\d{4}$/ (entire regex patterns)

Python:
import re
email_pattern = r'^[^\s@]+@[^\s@]+\.[^\s@]+$'
phone_pattern = r'^\d{3}-\d{3}-\d{4}$'
→ Color affects: r'^[^\s@]+@[^\s@]+\.[^\s@]+$', r'^\d{3}-\d{3}-\d{4}$' (regex strings)

PHP:
$emailPattern = '/^[^\s@]+@[^\s@]+\.[^\s@]+$/';
$phonePattern = '/^\d{3}-\d{3}-\d{4}$/';
→ Color affects: '/^[^\s@]+@[^\s@]+\.[^\s@]+$/', '/^\d{3}-\d{3}-\d{4}$/' (regex patterns)

Go:
import "regexp"
emailRegex := regexp.MustCompile(`^[^\s@]+@[^\s@]+\.[^\s@]+$`)
phoneRegex := regexp.MustCompile(`^\d{3}-\d{3}-\d{4}$`)
→ Color affects: `^[^\s@]+@[^\s@]+\.[^\s@]+$`, `^\d{3}-\d{3}-\d{4}$` (regex strings)

Kotlin:
val emailRegex = Regex("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$")
val phoneRegex = Regex("^\\d{3}-\\d{3}-\\d{4}$")
→ Color affects: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$", "^\\d{3}-\\d{3}-\\d{4}$" (regex strings)

Java:
import java.util.regex.Pattern;
Pattern emailPattern = Pattern.compile("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$");
Pattern phonePattern = Pattern.compile("^\\d{3}-\\d{3}-\\d{4}$");
→ Color affects: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$", "^\\d{3}-\\d{3}-\\d{4}$" (regex strings)
*/
exports.regex = [
    // REGEX
    {
        scope: [
            "string.regexp"
        ],
        settings: {
            foreground: "#d16969",
            fontStyle: "medium"
        }
    }
];
