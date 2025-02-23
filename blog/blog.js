//blog.js//
const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
		}
]

const articleContainer = document.querySelector(".review-content");
const metadataContainer = document.querySelector(".metadata");

articles.forEach((article) => {
	metadataContainer.innerHTML += `
		<div class="metadata-post">
			<h3 id="date">${article.date}</h3>
			<p id="ages">${article.ages}</p>
			<p id="genre">${article.genre}</p>
			<p id="stars">${article.stars}</p>
		</div>
	`;
	
	const newArticle = document.createElement("article");
	newArticle.classList.add("review-content");
	
	newArticle.innerHTML = `
		<div class="review-content">
			<h2 id="book-title">${article.title}</h2>
			<img id="post-image" src=${article.imgSrc} alt=${article.imgAltlt}>
			<p id="review-paragraph">${article.description}</p>
			</div>
	`;

	//const bookTitle = document.createElement("h2");
	//bookTitle.id = "book-title";
	//bookTitle.textContent = article.title;

	//const bookImage = document.createElement("img");
	//bookImage.id = "post-image";
	//bookImage.src = article.imgSrc;
	//bookImage.alt = article.imgAlt;

	//const reviewParagraph = document.createElement("p");
	//reviewParagraph.id = "review-paragraph";
	//reviewParagraph.textContent = article.description;

	//newArticle.appendChild(bookTitle);
	//newArticle.appendChild(bookImage);
	//newArticle.appendChild(reviewParagraph);

	articleContainer.appendChild(newArticle);
});

//const detailContainer = document.querySelector("#metadata");

//articles.forEach((article) => {
	//const newArticle = document.createElement("article");
	//newArticle.classList.add("metadata");

	//const reviewDate = document.createElement("h3");
	//reviewDate.id = "date";
	//reviewDate.textContent = article.date;
	
	//const bookAge = document.createElement("p");
	//bookAge.id = "ages";
	//bookAge.textContent = article.ages;

	//const bookGenre = document.createElement("p");
	//bookGenre.id = "genre";
	//bookGenre.textContent = article.genre;

	//const bookStars = document.createElement("p");
	//bookStars.id = "stars";
	//bookStars.textContent = article.stars;

	//newArticle.appendChild(reviewDate);
	//newArticle.appendChild(bookAge);
	//newArticle.appendChild(bookGenre);
	//newArticle.appendChild(bookStars);

	//detailContainer.appendChild(newArticle);
//});