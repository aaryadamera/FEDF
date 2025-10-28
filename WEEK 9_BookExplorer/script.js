const books = [
  { id: 1, title: "NCERT Physics Class 11", author: "NCERT", rating: 4.7, pdfLink: "https://www.drishtiias.com/images/pdf/NCERT-Class-11-Physics-Part-1.pdf", image: "https://m.media-amazon.com/images/I/81W3p3zDyfL.jpg" },
  { id: 2, title: "NCERT Physics Class 12", author: "NCERT", rating: 4.8, pdfLink: "https://www.drishtiias.com/images/pdf/NCERT-Class-12-Physics-Part-1.pdf", image: "https://m.media-amazon.com/images/I/81r9h9X4xhL.jpg" },
  { id: 3, title: "Concepts of Physics Vol 1", author: "H.C. Verma", rating: 4.9, pdfLink: "https://archive.org/details/ConceptsOfPhysicsVol1_HCVerma", image: "https://m.media-amazon.com/images/I/51xWQoZzTUL.jpg" },
  { id: 4, title: "Concepts of Physics Vol 2", author: "H.C. Verma", rating: 4.9, pdfLink: "https://archive.org/details/ConceptsOfPhysicsVol2_HCVerma", image: "https://m.media-amazon.com/images/I/51qWm5+gHQL.jpg" },
  { id: 5, title: "Objective Physics Vol 1", author: "D.C. Pandey", rating: 4.6, pdfLink: "https://www.scribd.com/document/824844682/Objective-Physics-Vol1-DC-Pandey", image: "https://m.media-amazon.com/images/I/71zJb8r26PL.jpg" },
  { id: 6, title: "Organic Chemistry", author: "Morrison & Boyd", rating: 4.7, pdfLink: "https://archive.org/details/dli.scoerat.3535organicchemistryfourthedition", image: "https://m.media-amazon.com/images/I/61eWvDGKiyL.jpg" },
  { id: 7, title: "Physical Chemistry", author: "O.P. Tandon", rating: 4.6, pdfLink: "https://www.scribd.com/document/857163624/Op-Tandon-Physical-Chemistry", image: "https://m.media-amazon.com/images/I/71UO0vXsw9L.jpg" },
  { id: 8, title: "Inorganic Chemistry", author: "J.D. Lee", rating: 4.5, pdfLink: "https://jesusconsultancy.com/wp-content/uploads/2022/02/Lee-JD-Concise-inorganic-Chemistry_lee-5ed.pdf_18-2-2022.pdf", image: "https://m.media-amazon.com/images/I/51v9bYfHlDL.jpg" },
  { id: 9, title: "Mathematics Class 11", author: "R.D. Sharma", rating: 4.6, pdfLink: "https://www.vedantu.com/ncert-books/ncert-books-class-11-physics", image: "https://m.media-amazon.com/images/I/71plYvwYzRL.jpg" },
  { id: 10, title: "Mathematics Class 12", author: "R.D. Sharma", rating: 4.6, pdfLink: "https://www.vedantu.com/ncert-books/ncert-books-class-12-physics", image: "https://m.media-amazon.com/images/I/71xFPPFUEsL.jpg" },
  { id: 11, title: "IIT Mathematics", author: "M.L. Khanna", rating: 4.7, pdfLink: "https://www.pdfdrive.com/iit-mathematics-ml-khanna-d34689552.html", image: "https://m.media-amazon.com/images/I/71YjM7fHb1L.jpg" },
  { id: 12, title: "Problems in Physics", author: "I.E. Irodov", rating: 4.8, pdfLink: "https://www.pdfdrive.com/problems-in-physics-by-ie-irodov-d34510828.html", image: "https://m.media-amazon.com/images/I/71mXbq6hEcL.jpg" },
  { id: 13, title: "JEE Main & Advanced Physics", author: "B.M. Sharma", rating: 4.6, pdfLink: "https://www.pdfdrive.com/jee-main-and-advanced-physics-d34510827.html", image: "https://m.media-amazon.com/images/I/71YpB3hJkHL.jpg" },
  { id: 14, title: "JEE Main & Advanced Chemistry", author: "Arihant", rating: 4.5, pdfLink: "https://www.pdfdrive.com/jee-main-advanced-chemistry-arihant-d34510826.html", image: "https://m.media-amazon.com/images/I/71F5XgG7WCL.jpg" },
  { id: 15, title: "JEE Mathematics", author: "Arihant", rating: 4.5, pdfLink: "https://www.pdfdrive.com/jee-mathematics-arihant-d34510825.html", image: "https://m.media-amazon.com/images/I/71QmZFGaFnL.jpg" },
  { id: 16, title: "Objective Mathematics", author: "R.D. Sharma", rating: 4.6, pdfLink: "https://www.pdfdrive.com/objective-mathematics-rd-sharma-d34510824.html", image: "https://m.media-amazon.com/images/I/71a4WJwZbHL.jpg" },
  { id: 17, title: "Tricks & Tips for Physics", author: "Cengage", rating: 4.4, pdfLink: "https://www.pdfdrive.com/tricks-and-tips-for-physics-d34510823.html", image: "https://m.media-amazon.com/images/I/71ohL4SxqML.jpg" },
  { id: 18, title: "Previous Year Papers - Physics", author: "Arihant", rating: 4.3, pdfLink: "https://www.pdfdrive.com/previous-year-papers-physics-arihant-d34510822.html", image: "https://m.media-amazon.com/images/I/71ZCzUThg5L.jpg" },
  { id: 19, title: "Previous Year Papers - Chemistry", author: "Arihant", rating: 4.3, pdfLink: "https://www.pdfdrive.com/previous-year-papers-chemistry-arihant-d34510821.html", image: "https://m.media-amazon.com/images/I/71fQ2Gp+7XL.jpg" },
  { id: 20, title: "Previous Year Papers - Mathematics", author: "Arihant", rating: 4.3, pdfLink: "https://www.pdfdrive.com/previous-year-papers-mathematics-arihant-d34510820.html", image: "https://m.media-amazon.com/images/I/71l1vSkbB5L.jpg" }
];

// DOM Elements
const bookList = document.getElementById("bookList");
const searchInput = document.getElementById("searchInput");

// Render books
function renderBooks(filteredBooks = books) {
  bookList.innerHTML = "";
  filteredBooks.forEach(book => {
    const li = document.createElement("li");
    li.classList.add("book-card");
    li.innerHTML = `
   
      <div class="book-info">
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <p>Rating: ${book.rating}</p>
      </div>
    `;
    li.onclick = () => window.open(book.pdfLink, "_blank");
    bookList.appendChild(li);
  });
}

// Search functionality
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(query)
  );
  renderBooks(filteredBooks);
});

// Initial render
renderBooks();
