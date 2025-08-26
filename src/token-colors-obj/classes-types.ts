import type jsType = require('../js.type');

/*
Code Examples:

TypeScript:
class User {
    name: string;
    age: number;
}

interface UserRepository {
    findById(id: number): User;
    save(user: User): void;
}

type UserStatus = 'active' | 'inactive';
enum Role { Admin, User, Guest }
→ Color affects: User, UserRepository, UserStatus, Role (class names, interface names, type names, enum names)

Python:
class User:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age

from typing import List, Dict, Optional
def get_users() -> List[User]:
    return []
→ Color affects: User, List, Dict, Optional, str, int (class names, type hints)

PHP:
class User {
    public string $name;
    public int $age;
}

interface UserRepositoryInterface {
    public function findById(int $id): User;
}

abstract class BaseModel {
    protected int $id;
}
→ Color affects: User, UserRepositoryInterface, BaseModel, string, int (class names, interface names, type declarations)

Go:
type User struct {
    Name string
    Age  int
}

type UserRepository interface {
    FindById(id int) *User
    Save(user *User) error
}

type UserStatus string
const (
    Active   UserStatus = "active"
    Inactive UserStatus = "inactive"
)
→ Color affects: User, UserRepository, UserStatus, string, int, error (type names, interface names, built-in types)

Kotlin:
class User(val name: String, val age: Int) {
    companion object {
        const val MAX_AGE = 120
    }
}

interface UserRepository {
    fun findById(id: Int): User?
    fun save(user: User)
}

data class UserDto(val name: String, val email: String)
sealed class Result<T>
→ Color affects: User, UserRepository, UserDto, Result, String, Int (class names, interface names, data class names, type parameters)

Java:
public class User {
    private String name;
    private Integer age;
}

public interface UserRepository {
    User findById(Long id);
    void save(User user);
}

public abstract class BaseEntity {
    protected Long id;
}

public enum UserStatus {
    ACTIVE, INACTIVE, PENDING
}
→ Color affects: User, UserRepository, BaseEntity, UserStatus, String, Integer, Long (class names, interface names, enum names, wrapper types)

C:
struct User {
    char* name;
    int age;
};

typedef struct {
    int id;
    char* title;
} Task;

typedef enum {
    STATUS_ACTIVE,
    STATUS_INACTIVE
} UserStatus;

union Data {
    int integer;
    float decimal;
};
→ Color affects: User, Task, UserStatus, Data, int, char, float (struct names, typedef names, enum names, built-in types)

C#:
public class User {
    public string Name { get; set; }
    public int Age { get; set; }
}

public interface IUserRepository {
    User FindById(int id);
    void Save(User user);
}

public abstract class BaseEntity {
    protected int Id { get; set; }
}

public enum UserStatus {
    Active,
    Inactive,
    Pending
}

public struct Point {
    public int X;
    public int Y;
}
→ Color affects: User, IUserRepository, BaseEntity, UserStatus, Point, string, int (class names, interface names, enum names, struct names, built-in types)

C++:
class User {
private:
    std::string name;
    int age;
public:
    User(const std::string& name, int age);
};

template<typename T>
class Repository {
public:
    virtual T findById(int id) = 0;
    virtual void save(const T& entity) = 0;
};

struct Point {
    double x, y;
    Point(double x, double y) : x(x), y(y) {}
};

enum class UserStatus {
    Active,
    Inactive,
    Pending
};

using UserPtr = std::shared_ptr<User>;
typedef std::vector<User> UserList;
→ Color affects: User, Repository, Point, UserStatus, UserPtr, UserList, std::string, std::shared_ptr, std::vector, int, double (class names, template names, struct names, enum class names, type aliases, STL types)
*/

export const classesTypes: jsType.TokenColorInterface[] = [
        // CLASSES & TYPES
        {
                scope: [
                        "entity.name.class",
                        "entity.name.type",
                        "support.class",
                        "storage.type"
                ],
                settings: {
                        foreground: "#a83e40ff",
                        fontStyle: "medium"
                }
        }
];
