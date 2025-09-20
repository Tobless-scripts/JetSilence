"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.annotations = void 0;
/*
Code Examples:

TypeScript/Angular:
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html'
})
export class UserComponent {
    @Input() name: string;
    @Output() click = new EventEmitter();
}
→ Color affects: @Component, @Input, @Output (decorator symbols and names)

Python:
class MyClass:
        @property
        def value(self):
                return self._value
        
        @staticmethod
        def utility_method():
                return "Hello"
→ Color affects: @property, @staticmethod (decorator symbols and names)

PHP (Attributes - PHP 8):
#[Route('/api/users')]
class UserController {
        #[Inject]
        private UserService $userService;
}
→ Color affects: #[Route('/api/users')], #[Inject] (attribute syntax)

Java:
@Entity
@Table(name = "users")
public class User {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        
        @Override
        public String toString() {
                return "User: " + name;
        }
}
→ Color affects: @Entity, @Table, @Id, @GeneratedValue, @Override (annotation symbols and names)

Kotlin:
@Entity
@Table(name = "users")
class User {
        @Id
        @GeneratedValue
        val id: Long? = null
        
        @Column
        var name: String = ""
}
→ Color affects: @Entity, @Table, @Id, @GeneratedValue, @Column (annotation symbols and names)

C# (Attributes):
[Serializable]
[Table("Users")]
public class User {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        
        [Required]
        [MaxLength(100)]
        public string Name { get; set; }
}
→ Color affects: [Serializable], [Table("Users")], [Key], [DatabaseGenerated], [Required], [MaxLength(100)] (attribute syntax)

C/C++ (GCC/Clang attributes):
__attribute__((packed))
struct Data {
        char a;
        int b;
};

[[deprecated("Use newFunction instead")]]
void oldFunction() {
        // implementation
}

__declspec(dllexport) void exportedFunction();
→ Color affects: __attribute__((packed)), [[deprecated(...)]], __declspec(dllexport) (attribute syntax)

Go (struct tags):
type User struct {
        ID   int    `json:"id" db:"id"`
        Name string `json:"name" db:"name"`
}
→ Color affects: `json:"id" db:"id"`, `json:"name" db:"name"` (struct tag syntax)
*/
exports.annotations = [
    // ANNOTATIONS/DECORATORS
    {
        scope: [
            "punctuation.decorator",
            "meta.decorator",
            "entity.name.function.decorator",
            "storage.type.annotation",
            "punctuation.definition.annotation",
            "meta.annotation",
            "entity.name.type.annotation"
        ],
        settings: {
            foreground: "#A43637",
            fontStyle: "medium"
        }
    }
];
