//factory function to create a book object with needed properties.
function makeBook(title, author, genre, pageNumber, year, language, imgSrc, link) {
	return {
		title: title,
		author: author,
		genre: genre,
		pageNumber: pageNumber,
		year: year,
		language: language,
		imgSrc: imgSrc,
		link: link
	};
}
//creating books from our library.
var book1 = makeBook("Harry Potter and the Sorcerer's Stone", 'J. K. Rowling', 'Fantasy',256 ,1997, 
	'English', "https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg", 
	"https://www.amazon.com/gp/product/059035342X/");
var book2 = makeBook("To Kill a Mockingbird", "Harper Lee", "Gothic", 281, 1960,
	'English', "https://images-na.ssl-images-amazon.com/images/I/51N5qVjuKAL._SX309_BO1,204,203,200_.jpg", 
	"https://www.amazon.com/gp/product/0446310786/");
var book3 = makeBook("The Hobbit", "J. R. R. Tolkien", 'Fantasy', 310, 1937, 
	"English", "https://images-na.ssl-images-amazon.com/images/I/51uLvJlKpNL._SX321_BO1,204,203,200_.jpg", 
	"https://www.amazon.com/gp/product/054792822X/");
var book4 = makeBook("1984", "George Orwell", "Science Fiction", 328, 1949,
	"English", "https://images-na.ssl-images-amazon.com/images/I/41h5dDUzJhL._SX277_BO1,204,203,200_.jpg", 
	"https://www.amazon.com/gp/product/0451524934/");
var book5 = makeBook("The Lord of the Rings", "J. R. R. Tolkien", "Fantasy", 1178, 1955, 
	"English", "https://images-na.ssl-images-amazon.com/images/I/51eq24cRtRL._SX331_BO1,204,203,200_.jpg", 
	"https://www.amazon.com/gp/product/0618640150/");
var book6 = makeBook("The Great Gatsby", "F. Scott Fitzgerald", "Tragedy", 218, 1925, 
	"English", "https://images-na.ssl-images-amazon.com/images/I/41iers+HLSL._SX326_BO1,204,203,200_.jpg", 
	"https://www.amazon.com/gp/product/0743273567/");
var book7 = makeBook("The Diary of A Young Girl", "Anne Frank", "Autobiography", 320, 1947, 
	"Dutch", "https://images-na.ssl-images-amazon.com/images/I/51EPqZ9kFnL._SX309_BO1,204,203,200_.jpg", 
	"https://www.amazon.com/gp/product/0307594009/");
var book8 = makeBook("The Hunger Games", "Suzanne Collins", "Science Fiction", 374, 2008, 
	"English", "https://images-na.ssl-images-amazon.com/images/I/41WAJbx1e2L._SX325_BO1,204,203,200_.jpg", 
	"https://www.amazon.com/gp/product/0439023521/");
var book9 = makeBook("Hamlet", "William Shakespeare", "Tragedy", 432, 1603, 
	"English", "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555160733l/1432.jpg", 
	"https://www.amazon.com/gp/product/1451669410/");
var book10 = makeBook("The Girl with the Dragon Tattoo", "Stieg Larsson", "Thriller", 672, 2005, 
	"Swedish", "https://upload.wikimedia.org/wikipedia/en/b/bc/Thegirlwiththedragontattoo.jpg", 
	"https://www.amazon.com/gp/product/0307949486/");
//creating an array of all books which represents the library inventary.
var books = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10];
//the function addImg takes an image element, an anchor element and a class, it generates a random index and then add an image with 
//a link to the respective book to append it at the end to the div that has the selected class. 
 function addImg($img, $link, $class) {
 	var index = Math.floor(Math.random() * books.length);
 	$img.attr('src', books[index].imgSrc).attr('alt', books[index].title).css('height', '300px').css('width', '200px');
 	$link.attr('href', books[index].link).attr('target', '_blank');
 	$link.append($img).appendTo($class);
 }
 //displayBooks is a function that given an array of books objects and an element's id, loops through the array, 
 //creates an anchor element which contains book information linking to the respective page 
 //and append it to the div with the selected id.
 function displayBooks(books, $id) {
 	for(var i = 0; i < books.length; i++) {
	 		var $book = $('<a></a><br>');
	 		$book.text(books[i].title + ' By ' + books[i].author + ', ' + books[i].year + '.');
	 		$book.attr('href', books[i].link).attr('target', '_blank');
	 		$book.appendTo($id);
	 	}
 }
 //creating an array with div's class of the booksList class.
 var arr = ['.firstBook', '.secondBook', '.thirdBook'];
 $(document).ready(function() {
 	//adding three random images to link to the respective books
  for(var i = 0; i < 3; i++) {
  	var $img = $('<img>');
  	var $link = $('<a></a>')
  	addImg($img, $link, arr[i]);
  }
//clicking on display button the function will filter the array of books that match the query input and display each book information. 
$('#display').click(function() {
 	$("#matched_books").empty();
 	$("#matched_books").show();
	var query = $('#query').val().toLowerCase();
	if(query.length > 3) {
		var matchedBooks = books.filter(book => book.title.toLowerCase().indexOf(query) >= 0 
			|| book.author.toLowerCase().indexOf(query) >= 0);
	 	displayBooks(matchedBooks, "#matched_books");
	}
});
//hide the div with matched_books id.
 $('#clear').click(function() {
 	$("#matched_books").hide();
 });
 //the function will display the books that have the selected genre and the respective page number.
 $('#check').click(function() {
 	$('#selected_books').empty();
 	$('#selected_books').show();
 	var $genre = $("input[name='genre']:checked").val();
 	var from = $('#from').val();
 	var to = $('#to').val();
 	var matchedBooks = books.filter(book => book.genre === $genre && book.pageNumber >= from && book.pageNumber <= to);
 	displayBooks(matchedBooks,"#selected_books");
 });
 $('#Clear').click(function() {
 	$("#selected_books").hide();
 });
 });

