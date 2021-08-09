function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => {renderBooks(json);
  })
  return  fetch('https://anapioficeandfire.com/api/books')
  }


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

// function fetchBook(b) {
//   fetch('https://anapioficeandfire.com/api/books')
//   .then(resp => resp.json())
//   .then(json => console.log(json[`${b}`]));
// }

// function fetchCharacter(c) {
//   fetch(`https://anapioficeandfire.com/api/characters/${c}`)
//   .then(resp => resp.json())
//   .then(json => console.log(json));
// }

// function fetchTotalPages() {
//   fetch('https://anapioficeandfire.com/api/books')
//   .then(resp => resp.json())
//   .then(json => {
// const pages = []
// for ( let i = 0; i < json.length; i++) {
// pages.push(json[i]["numberOfPages"])
// }
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(pages.reduce(reducer))
// });
// }

