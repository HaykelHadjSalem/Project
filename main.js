function makeBook(title, author, genre, pageNumbers, year, language, imgSrc, link) {
	return {
		title: title,
		author: author,
		genre: genre,
		pageNumbers: pageNumbers,
		year: year,
		language: language,
		imgSrc: imgSrc,
		link: link
	};
}
var book1 = makeBook("Harry Potter and the Sorcerer's Stone", 'J. K. Rowling', 'Fantasy',256 ,1997, 
	'English', "https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg", 
	"https://www.amazon.com/gp/product/059035342X/");
var book2 = makeBook("To Kill a Mockingbird", "Harper Lee", "Southern Gothic", 281, 1960,
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
var book8 = makeBook("The Hunger Games", "Suzanne Collins", "Science fiction", 374, 2008, 
	"English", "https://images-na.ssl-images-amazon.com/images/I/41WAJbx1e2L._SX325_BO1,204,203,200_.jpg", 
	"https://www.amazon.com/gp/product/0439023521/");
var book9 = makeBook("Hamlet", "William Shakespeare", "Tragedy", 432, 1603, 
	"English", "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555160733l/1432.jpg", 
	"https://www.amazon.com/gp/product/1451669410/");
var book10 = makeBook("The Girl with the Dragon Tattoo", "Stieg Larsson", "Thriller", 672, 2005, 
	"Swedish", "https://upload.wikimedia.org/wikipedia/en/b/bc/Thegirlwiththedragontattoo.jpg", 
	"https://www.amazon.com/gp/product/0307949486/");
var books = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10];
 
 function addImg($img, $link, $class) {
 	var index = Math.floor(Math.random() * books.length);
 	$img.attr('src', books[index].imgSrc).attr('alt', books[index].title).css('height', '300px').css('width', '200px');
 	$link.attr('href', books[index].link).attr('target', '_blank');
 	$link.append($img).appendTo($class);
 }
 var arr = ['.firstBook', '.secondBook', '.thirdBook'];
 $(document).ready(function() {
  for(var i = 0; i < 3; i++) {
  	var $img = $('<img>');
  	var $link = $('<a></a>')
  	addImg($img, $link, arr[i]);
  }
$('#display').click(function() {
 	$("#matched_books").empty();
 	$("#matched_books").show();
	var query = $('#query').val().toLowerCase();
	if(query.length > 3) {
		var matchedBooks = books.filter(book => book.title.toLowerCase().indexOf(query) >= 0 
			|| book.author.toLowerCase().indexOf(query) >= 0);
	 	for(var i = 0; i < matchedBooks.length; i++) {
	 		var $book = $('<a></a><br>');
	 		$book.text(matchedBooks[i].title + ' By ' + matchedBooks[i].author + ', ' + matchedBooks[i].year + '.');
	 		$book.attr('href', matchedBooks[i].link).attr('target', '_blank');
	 		$book.appendTo($("#matched_books"));
	 	}
	}
});
 $('#clear').click(function() {
 	$("#matched_books").hide();
 })
 });

