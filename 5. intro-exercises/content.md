# Exercises

##  Exercises for the introduction part.

### 1: Variable Assignment and Basic Operations
- Create a JavaScript program that assign values to 2 variables and then will perform the following operation on them:
    * Add the two values and display the result
    * Display the remainder of dividing the first by to the second one
    * Display the result of dividing the second one by 0 (check what happens)


### 2 String Manipulation
- Create a JavaScript program that assign any value (of your choice but at least 10 characters) to a string. The program should display the following:
    - Its uppercase version
    - Its lowercase version
    - Its length
    - A substring from the first to the 4th character
    - Another string formed from the initial one, repeated 5 times


### 3: Array Operations
- Create a JavaScript program that initializes an array of 5 numbers. The program should perform the following:
    - Add another element at the end of the array and display the array
    - Remove the last two elements and then display the array
    - If the array contains the number `95` it should display `it has the number` otherwise it should display `it does not have the number`
    - It should concatenate the array with a new one, containing different numbers and then display the end result.
    - It should create another array based on the initial one, but filtering out the odd numbers and display the result
    - It should create another array, based on the initial one, but for each number, it will double the value and display the result
        - for example if the initial one is: `[2,3,4,5]`, the result will be `[4,6,8,10]`


### 4: Object Properties
- Create a JavaScript program that builds an object representing a person with properties like firstName, lastName, age, and addres. The address should also be an object containing: street name, street number, city name, county, country. In the end, display the object.


### 5. For Loop Iteration
- Create a JavaScript program that creates an array of five strings. Use a for loop to iterate over the array and print each string in uppercase.


### 6. Nested For Loops
- Create a JavaScript program that uses nested for loops to generate a multiplication table (1-10) and print the results in a tabular format.


### 7. Summing Array Elements with While Loop
- Create a javascript program that initializes an array with numbers and then uses a while loop to calculate the sum of all elements. The program should print the sum.


### 8. Modifying Object Properties with For...in Loop
- Create a JavaScript program that initializes an array of objects (created by you), where all the keys (of the objects) have strings as values and then uses the `for..in` structure to iterate over the object's properties and then transform their corresponding values to uppercase
Title: Iterating Over Object Properties


### 9. Filtering Array Elements with For...of Loop
- Create a JavaScript program that initializes an array of number and then uses the `For..of` structure to filter out its even values into a new array. The program should print the new array.

### 10. Exercise: Library Management System
Design a system where there are Users and Books. Users can be regular Members or Librarians. Members can borrow books, and librarians can add new books to the library. Each user has basic information like name and email, while each book has a title and author. The Librarian class should inherit from the User class.

Details: 

1. Create a User Class:

    - The User class should have:
        - Fields for name and email.
        - A method getDetails() that returns the user's details.

2. Create a Member Class:

    - The Member class should inherit from User.
    - Add a field borrowedBooks that keeps track of the books borrowed by the member.
    - Add a method borrowBook(book) that adds a book to the borrowedBooks list.
    - Add a method getBorrowedBooks() that returns the list of borrowed books.

3. Create a Librarian Class:

    - The Librarian class should inherit from User.
    - Add a method addBook(book) that adds a new book to the library's collection.
    - The library's collection of books should be a static field in the Librarian class so that all librarians share the same collection.
    - Add a method getBooks() that returns the current list of books in the library.
4. Create a Book Class:

    - The Book class should have fields for title and author.
    - Add a method getDetails() that returns the book's details.

Test the Classes by performing the following actions:

- Create instances of Member and Librarian.
- Add some books to the library using a Librarian.
- Have a Member borrow some books.
- Print out the details of the borrowed books and the library's current collection.