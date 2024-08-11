5. 
    ```JavaScript
        class User {
            constructor(name, email) {
                this.name = name
                this.email = email
            }

            getDetails() {
                return `Name: ${this.name}. Email: ${this.email}`
            }
        }

        class Member extends User {
            borrowedBooks = []

            borrowBook(book) {
                this.borrowedBooks.push(book)
            }

            getBorrowedBooks() {
                return this.borrowedBooks
            }
        }

        class Librarian extends User {
            static books = []

            addBook(book){
                Librarian.books.push(book)
            }

            getBooks(){
                return Librarian.books
            }
        }

        class Book {
            constructor(title, author) {
                this.title = title
                this.author = author
            }

            getDetails(){
                return `Title: ${this.title}. Author: ${this.author}`
            }
        }

            const member1 = new Member('Bogdan', 'bogdan@example.com')
            const member2 = new Member('Joanna', 'joanna@example.com')
            const librarian1 = new Librarian('Markus', 'markus@biblioteca.com')
            const librarian2 = new Librarian('Markusica', 'markusica@biblioteca.com')

            const theTwoTowers = new Book('The Two Towers', 'J.R.R. Tolkien')
            const theReturnOfTheKing = new Book('The Return of The King','J.R.R. Tolkien' )
            librarian1.addBook(theReturnOfTheKing)
            librarian1.addBook(theTwoTowers)

            member1.borrowBook(theTwoTowers)
            console.log(librarian1.getBooks())
            console.log(member1.getBorrowedBooks())
    ```