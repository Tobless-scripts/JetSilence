"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classesTypes = void 0;
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
*/
exports.classesTypes = [
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
