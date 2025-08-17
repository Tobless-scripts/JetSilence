import type jsType = require('../js.type');

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

Go (struct tags):
type User struct {
    ID   int    `json:"id" db:"id"`
    Name string `json:"name" db:"name"`
}
→ Color affects: `json:"id" db:"id"`, `json:"name" db:"name"` (struct tag syntax)
*/

export const annotations: jsType.TokenColorInterface[] = [
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
