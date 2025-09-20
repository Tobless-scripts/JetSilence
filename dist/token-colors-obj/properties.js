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

C:
struct User {
    char name[50];
    int age;
};

void initUser(struct User* user, const char* name, int age) {
    strcpy(user->name, name);
    user->age = age;
}
→ Color affects: name, age (struct member names), user, name, age (parameter names), user->name, user->age (member access)

C++:
class User {
public:
    std::string name;
private:
    int age;
    
public:
    User(const std::string& name, int age) : name(name), age(age) {}
    
    void setAge(int age) {
        this->age = age;
    }
};
→ Color affects: name, age (member names), name, age (parameter names), this->age, this.name (member access)

C#:
public class User {
    public string Name { get; set; }
    private int age;
    
    public User(string name, int age) {
        this.Name = name;
        this.age = age;
    }
}
→ Color affects: Name, age (property/field names), name, age (parameter names), this.Name, this.age (property/field access)
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
