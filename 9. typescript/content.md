
# TypeScript

## Agenda


- TypeScript Compiler and Configuration
- Basic Type Annotations
- Type Inference
- Interfaces and Type Aliases
- Functions
- Union and Intersection Types
- Generics
- Modules and Namespaces
- Enums
- Classes and Interfaces
- Error Handling
- Type Guards
- Advanced Types
- Utility Types



TypeScript is a superset of JavaScript that adds static types, helping you catch errors early and write more robust code. If you're comfortable with JavaScript, learning TypeScript will give you the tools to write safer and more maintainable code. Below, we'll explore key TypeScript concepts and show how they improve JavaScript development.

## TypeScript Compiler and Configuration (`tsconfig.json`)

### What It Is:
The `tsconfig.json` file allows you to configure the TypeScript compiler to tailor it to your project’s needs.

### Example:
```json
{
    "compilerOptions": {
        "target": "es6",
        "strict": true,
        "noImplicitAny": true,
        "outDir": "./dist"
    }
}
```

### Benefit:
Configuring TypeScript ensures consistent coding standards across your project and can prevent common errors.

### Transpilation:
Running `tsc` compiles TypeScript files into JavaScript, which can then be executed in any JavaScript environment.


## Basic Type Annotations

### What It Is:
Type annotations allow you to declare the types of variables, function parameters, and return values explicitly.

### Example:
```typescript
let age: number = 25; // number type
let name: string = "John"; // string type
let isStudent: boolean = true; // boolean type
```

### Benefit:
Without type annotations, you might accidentally assign a wrong type to a variable, leading to runtime errors. TypeScript catches these errors at compile-time.

### JavaScript:
```javascript
let age = 25;
age = "twenty-five"; // No error, but this can lead to bugs.
```

### TypeScript:
```typescript
let age: number = 25;
age = "twenty-five"; // Error: Type 'string' is not assignable to type 'number'.
```

## Type Inference

### What It Is:
TypeScript can infer the type of a variable based on its initial value, so you don't always need to explicitly annotate types.

### Example:
```typescript
let score = 100; // inferred as number
score = "one hundred"; // Error: Type 'string' is not assignable to type 'number'.
```

### Benefit:
Type inference reduces boilerplate code while still providing the benefits of static typing.

## Interfaces and Type Aliases

### What It Is:
Interfaces and type aliases allow you to define custom types, which can describe the shape of an object or function.

### Example:
```typescript
interface Person {
    name: string;
    age: number;
}

let person: Person = {
    name: "Alice",
    age: 30
};
```

### Benefit:
Interfaces ensure that objects adhere to a specific structure, making your code more predictable and easier to understand.

### Type Aliases Example:
```typescript
type ID = number | string;
let userId: ID = 101;
userId = "A123"; // Both number and string are valid
```

## Functions

### What It Is:
TypeScript allows you to specify the types of function parameters and return values, ensuring that functions are called with the correct arguments.

### Example:
```typescript
function greet(name: string): string {
    return `Hello, ${name}!`;
}

greet("Bob"); // Valid
greet(42); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
```

### Benefit:
Type annotations in functions prevent bugs caused by passing incorrect arguments or returning unexpected types.

### Optional and Default Parameters:
```typescript
function greet(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}

greet("Bob"); // "Hello, Bob!"
greet("Bob", "Hi"); // "Hi, Bob!"
```

## Union and Intersection Types

### What It Is:
Union types allow a variable to hold one of several types, while intersection types combine multiple types into one.

### Example:
```typescript
function printId(id: number | string): void {
    console.log(`ID: ${id}`);
}

printId(101); // Valid
printId("A123"); // Valid
```

### Benefit:
Union types make functions more flexible while ensuring type safety.

### Intersection Types Example:
```typescript
interface User {
    name: string;
}

interface Admin {
    privileges: string[];
}

type AdminUser = User & Admin;

let adminUser: AdminUser = {
    name: "Alice",
    privileges: ["manage-users", "edit-content"]
};
```

## Generics

### What It Is:
Generics allow you to create reusable components, functions, and classes that work with any type.

### Example:
```typescript
function identity<T>(value: T): T {
    return value;
}

let numberIdentity = identity<number>(42); // number
let stringIdentity = identity<string>("TypeScript"); // string
```

### Benefit:
Generics enable type-safe and flexible code, allowing you to create functions and classes that work with a variety of types without sacrificing type safety.

## Modules and Namespaces

### What It Is:
TypeScript’s module system helps you organize your code by splitting it into smaller, reusable files.

### Example:
```typescript
// math.ts
export function add(a: number, b: number): number {
    return a + b;
}

// index.ts
import { add } from './math';
console.log(add(2, 3)); // 5
```

### Benefit:
Modules make your code more maintainable by promoting separation of concerns and reuse.

## 8. Enums

### What It Is:
Enums allow you to define a set of named constants, making your code more readable and maintainable.

### Example:
```typescript
enum Direction {
    Up,
    Down,
    Left,
    Right
}

let move: Direction = Direction.Up;
```

### Benefit:
Enums reduce errors caused by using magic numbers or strings, making your code more self-explanatory.

## Classes and Interfaces

### What It Is:
TypeScript builds on JavaScript's ES6 classes, adding static types to ensure that classes are used correctly.

### Example:
```typescript
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof! Woof!");
    }
}

const dog = new Dog("Buddy");
dog.bark(); // Woof! Woof!
dog.move(10); // Buddy moved 10 meters.
```

### Benefit:
Static typing in classes helps catch mistakes such as missing methods or incorrect property types.


## Error Handling

### What It Is:
TypeScript helps manage potential errors by providing strict null checks and allowing custom error types.

### Example:
```typescript
function getUser(id: number): User | null {
    if (id > 0) {
        return { name: "Alice", age: 25 };
    } else {
        return null;
    }
}

let user = getUser(-1);
if (user) {
    console.log(user.name); // TypeScript ensures user is not null
} else {
    console.log("User not found");
}
```

### Benefit:
TypeScript’s strict null checks prevent null or undefined errors, which are common in JavaScript.

## Type Guards

### What It Is:
Type guards help you refine types within a block of code, ensuring that the correct operations are performed based on the type.

### Example:
```typescript
function isString(value: any): value is string {
    return typeof value === 'string';
}

function printValue(value: number | string) {
    if (isString(value)) {
        console.log(`String: ${value.toUpperCase()}`);
    } else {
        console.log(`Number: ${value.toFixed(2)}`);
    }
}

printValue("Hello"); // String: HELLO
printValue(42); // Number: 42.00
```

### Benefit:
Type guards make your code safer by narrowing down types and preventing runtime errors.

##  Advanced Types

### What It Is:
Advanced types like mapped types and conditional types allow you to create more complex and reusable type definitions.

### Example (Mapped Types):
```typescript
type Readonly<T> = {
    readonly [K in keyof T]: T[K];
};

interface User {
    name: string;
    age: number;
}

let readonlyUser: Readonly<User> = {
    name: "Bob",
    age: 40
};

readonlyUser.name = "Alice"; // Error: Cannot assign to 'name' because it is a read-only property.
```

### Benefit:
Advanced types enable you to create flexible, reusable, and type-safe abstractions.

## Utility Types

### What It Is:
TypeScript provides utility types like `Partial`, `Readonly`, `Pick`, and `Omit` to manipulate types efficiently.

### Example:
```typescript
interface User {
    name: string;
    age: number;
    email: string;
}

type PartialUser = Partial<User>;

let user: PartialUser = {
    name: "Alice"
};
```

### Benefit:
Utility types save time and reduce boilerplate by providing common type transformations out of the box.
