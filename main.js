function makeBook(title, author, genre, pageNumbers, year, language, imgSrc) {
	return {
		title: title,
		author: author,
		genre: genre,
		pageNumbers: pageNumbers,
		year: year,
		language: language,
		imgSrc: imgSrc
	};
}
var book1 = makeBook("Harry Potter and the Sorcerer's Stone", 'J. K. Rowling', 'Fantasy',256 ,1997, 
	['English'], "https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg");
var book2 = makeBook("To Kill a Mockingbird", "Harper Lee", "Southern Gothic", 281, 1960,
	['English'], "https://images-na.ssl-images-amazon.com/images/I/51N5qVjuKAL._SX309_BO1,204,203,200_.jpg");
var book3 = makeBook("The Hobbit", "J. R. R. Tolkien", 'Fantasy', 310, 1937, 
	["English"], "https://images-na.ssl-images-amazon.com/images/I/51uLvJlKpNL._SX321_BO1,204,203,200_.jpg");
var book4 = makeBook("1984", "George Orwell", "Science Fiction", 328, 1949,
	["English"], "https://images-na.ssl-images-amazon.com/images/I/41h5dDUzJhL._SX277_BO1,204,203,200_.jpg");
var book5 = makeBook("The Lord of the Rings", "J. R. R. Tolkien", "Fantasy", 1178, 1955, 
	["English"], "https://images-na.ssl-images-amazon.com/images/I/51eq24cRtRL._SX331_BO1,204,203,200_.jpg");
var book6 = makeBook("The Great Gatsby", "F. Scott Fitzgerald", "Tragedy", 218, 1925, 
	["English"], "https://images-na.ssl-images-amazon.com/images/I/41iers+HLSL._SX326_BO1,204,203,200_.jpg");
var book7 = makeBook("The Diary of A Young Girl", "Anne Frank", "Autobiography", 320, 1947, 
	"Dutch", "https://images-na.ssl-images-amazon.com/images/I/51EPqZ9kFnL._SX309_BO1,204,203,200_.jpg");
var book8 = makeBook("The Hunger Games", "Suzanne Collins", "Science fiction", 374, 2008, 
	"English", "https://images-na.ssl-images-amazon.com/images/I/41WAJbx1e2L._SX325_BO1,204,203,200_.jpg");
var book9 = makeBook("Hamlet", "William Shakespeare", "Tragedy", 432, 1603, 
	"English", "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555160733l/1432.jpg");
var book10 = makeBook("The Girl with the Dragon Tattoo", "Stieg Larsson", "Thriller", 672, 2005, 
	"Swedish", "https://upload.wikimedia.org/wikipedia/en/b/bc/Thegirlwiththedragontattoo.jpg");
var books = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10];
$(document).ready(function() {
 var index = Math.floor(Math.random() * books.length);
 var $img1 = $('<img>');
 var $img2 = $('<img>');
 var $img3 = $('<img>'); 
 $img1.attr('src', books[index].imgSrc).attr('alt', books[index].title);
 $img1.appendTo('.firstBook');
 index = Math.floor(Math.random() * books.length);
 $img2.attr('src', books[index].imgSrc).attr('alt', books[index].title);
 $img2.appendTo('.secondBook');
 index = Math.floor(Math.random() * books.length);
 $img3.attr('src', books[index].imgSrc).attr('alt', books[index].title);
 $img3.appendTo('.thirddBook');
});