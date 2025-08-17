"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.properties = void 0;
/*
Code Examples:

TypeScript:
class User {
    public name: string;
    private age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
→ Color affects: name, age (property names), name, age (parameter names), this.name, this.age (property access)

Python:
class User:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age
→ Color affects: self, name, age (parameter names), self.name, self.age (property access)

PHP:
class User {
    public $name;
    private $age;
    
    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }
}
→ Color affects: $name, $age (property names), $name, $age (parameter names), $this->name, $this->age (property access)

Go:
type User struct {
    Name string
    Age  int
}

func NewUser(name string, age int) *User {
    return &User{Name: name, Age: age}
}
→ Color affects: Name, Age (struct field names), name, age (parameter names), Name: name, Age: age (field assignments)

Kotlin:
class User(val name: String, private val age: Int) {
    fun getDisplayName(): String {
        return this.name
    }
}
→ Color affects: name, age (property names), this.name (property access)

Java:
public class User {
    public String name;
    private int age;
    
    public User(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
→ Color affects: name, age (field names), name, age (parameter names), this.name, this.age (field access)
*/
exports.properties = [
    // PROPERTIES & ATTRIBUTES
    {
        scope: [
            "variable.other.property",
            "support.type.property-name",
            "entity.other.attribute-name"
        ],
        settings: {
            foreground: "#9cdcfe",
            fontStyle: "medium"
        }
    },
    // PARAMETERS
    {
        scope: [
            "variable.parameter",
            "meta.function.parameters"
        ],
        settings: {
            foreground: "#9cdcfe",
            fontStyle: "medium"
        }
    }
];
