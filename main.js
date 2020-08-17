var books = [];
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
var book2 = makeBook("To Kill a Mockingbird", "Harper Lee", "Southern Gothic, Bildungsroman", 281, 1960,
	['English'], "https://images-na.ssl-images-amazon.com/images/I/51N5qVjuKAL._SX309_BO1,204,203,200_.jpg");
var book3 = makeBook("The Hobbit", "J. R. R. Tolkien", 'High fantasy', 310, 1937, 
	["English"], "https://images-na.ssl-images-amazon.com/images/I/51uLvJlKpNL._SX321_BO1,204,203,200_.jpg");
var book4 = makeBook("1984", "George Orwell", "Social science fiction", 328, 1949,
	["English"], "https://images-na.ssl-images-amazon.com/images/I/41h5dDUzJhL._SX277_BO1,204,203,200_.jpg");