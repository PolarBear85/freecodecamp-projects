const books = [
    {title:"Book 1",
        authorName: 'Dave Lister',
        releaseYear: 1989
    },
    {title: 'Book 2',
        authorName: 'Arnold Rimmer',
        releaseYear: 1990
    },
    {title: 'Book 3',
        authorName: 'The Cat',
        releaseYear: 1985
    }
]

const filteredBooks = books.filter(book => book.releaseYear <= 1989);

function sortByYear (firstBook, secondBook) {
    if (firstBook.releaseYeat > secondBook.releaseyear) {
        return 1;
    } else if (firstBook.releaseYear < secondBook.releaseYear) {
        return -1;
    } else if (firstBook.releaseYear == secondBook.releaseYear) {
        return 0;
    }
}
console.log(filteredBooks.sort(sortByYear))

