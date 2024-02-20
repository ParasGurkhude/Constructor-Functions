function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}

function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
}

Book.prototype.getBookInfo = function() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author.name}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Price: $${this.price}`);
};
// Create Author instances
let author1 = new Author("J.K. Rowling", 1965, "British");
let author2 = new Author("George Orwell", 1903, "British");

// Create Book instances
let book1 = new Book("Harry Potter and the Sorcerer's Stone", author1, "Fantasy", 10.99);
let book2 = new Book("1984", author2, "Dystopian Fiction", 9.99);

// Display book details
book1.getBookInfo();
console.log("-----------------------");
book2.getBookInfo();
