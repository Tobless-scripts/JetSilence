"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.punctuation = void 0;
/*
Code Examples:

TypeScript:
function getData(): Promise<User[]> {
    return api.get("/users");
}
→ Color affects: (), [], {}, ;, :, <> (brackets, braces, semicolons, colons)

Python:
def get_data():
    return api.get("/users")
→ Color affects: (), [], {} (brackets and braces)

PHP:
function getData(): array {
    return $api->get("/users");
}
→ Color affects: (), [], {}, ;, : (brackets, braces, semicolons, colons)

Go:
func getData() []User {
    return api.Get("/users")
}
→ Color affects: (), [], {} (brackets and braces)

Kotlin:
fun getData(): List<User> {
    return api.get("/users")
}
→ Color affects: (), [], {}, <> (brackets, braces, angle brackets)

Java:
public List<User> getData() {
    return api.get("/users");
}
→ Color affects: (), [], {}, ;, <> (brackets, braces, semicolons, angle brackets)
*/
exports.punctuation = [
    // PUNCTUATION (brackets, semicolons, etc.)
    {
        scope: [
            "punctuation",
            "meta.brace",
            "punctuation.definition"
        ],
        settings: {
            foreground: "#B0BEC5",
            fontStyle: "medium"
        }
    }
];
