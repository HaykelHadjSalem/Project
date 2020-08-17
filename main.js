var books = [];
function makeBook(title, author, genre, pageNumbers, year, language) {
	return {
		title: title,
		author: author,
		genre: genre,
		pageNumbers: pageNumbers,
		year: year,
		language: language
	};
}
var book1 = makeBook("Harry Potter and the Sorcerer's Stone", 'J. K. Rowling', 'Fantasy',256 ,1997, ['English', 'French']);