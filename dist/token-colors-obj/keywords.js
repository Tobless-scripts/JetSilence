"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keywords = void 0;
/*
Code Examples:

TypeScript:
if (condition) {
    for (let i = 0; i < 10; i++) {
        while (isRunning) {
            function processData() {
                class User {
                    constructor() {}
                }
            }
        }
    }
}
→ Color affects: if, for, let, while, function, class, constructor (control flow and declaration keywords)

Python:
if condition:
    for i in range(10):
        while is_running:
            def process_data():
                class User:
                    def __init__(self):
                        pass
→ Color affects: if, for, in, while, def, class (control flow and declaration keywords)

PHP:
if ($condition) {
    for ($i = 0; $i < 10; $i++) {
        while ($isRunning) {
            function processData() {
                class User {
                    public function __construct() {}
                }
            }
        }
    }
}
→ Color affects: if, for, while, function, class, public (control flow and declaration keywords)

Go:
if condition {
    for i := 0; i < 10; i++ {
        for isRunning {
            func processData() {
                type User struct {
                    Name string
                }
            }
        }
    }
}
→ Color affects: if, for, func, type, struct (control flow and declaration keywords)

Kotlin:
if (condition) {
    for (i in 0..10) {
        while (isRunning) {
            fun processData() {
                class User {
                    constructor() {}
                }
            }
        }
    }
}
→ Color affects: if, for, in, while, fun, class, constructor (control flow and declaration keywords)

Java:
if (condition) {
    for (int i = 0; i < 10; i++) {
        while (isRunning) {
            public void processData() {
                class User {
                    public User() {}
                }
            }
        }
    }
}
→ Color affects: if, for, int, while, public, void, class (control flow and declaration keywords)

C:
if (condition) {
    for (int i = 0; i < 10; i++) {
        while (isRunning) {
            void processData() {
                struct User {
                    char name[50];
                };
            }
        }
    }
}
→ Color affects: if, for, int, while, void, struct (control flow and declaration keywords)

C++:
if (condition) {
    for (int i = 0; i < 10; i++) {
        while (isRunning) {
            void processData() {
                class User {
                    public:
                        User() {}
                };
            }
        }
    }
}
→ Color affects: if, for, int, while, void, class, public (control flow and declaration keywords)

C#:
if (condition) {
    for (int i = 0; i < 10; i++) {
        while (isRunning) {
            public void ProcessData() {
                public class User {
                    public User() {}
                }
            }
        }
    }
}
→ Color affects: if, for, int, while, public, void, class (control flow and declaration keywords)
*/
//KEYWORDS (IF, ELSE, FOR, WHILE, FUNCTION, CLASS, ETC...)
exports.keywords = [
    {
        scope: ["keyword", "keyword.control", "keyword.operator", "keyword.other"],
        settings: {
            foreground: "#A55832",
            fontStyle: "medium"
        }
    }
];
