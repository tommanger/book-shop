'use strict';
const MAXBOOKS = 5;
var gCurrPage = 0;

var gBooks;


function getBooks() {
    var fromBookIdx = gCurrPage * MAXBOOKS;
    var booksToShow = gBooks.slice(fromBookIdx, fromBookIdx + MAXBOOKS);
    return booksToShow;
}

function createBooks() {
    if (getFromStorage('gBooks')) {
        gBooks = getFromStorage('gBooks');
    } else {
        gBooks = [createBook('Harry Flotzer', 24, 'https://images-na.ssl-images-amazon.com/images/I/71Ui-NwYUmL.jpg'),
        createBook('Harry dgfbbd', 1, 'https://images-na.ssl-images-amazon.com/images/I/71Ui-NwYUmL.jpg'),
        createBook('Harry Flotzer', 2, 'https://images-na.ssl-images-amazon.com/images/I/71Ui-NwYUmL.jpg'),
        createBook('Harry Flotzer', 324, 'https://images-na.ssl-images-amazon.com/images/I/71Ui-NwYUmL.jpg'),
        createBook('Harry dgfbbd', 4254, 'https://images-na.ssl-images-amazon.com/images/I/71Ui-NwYUmL.jpg'),
        createBook('Harry Flotzer', 524, 'https://images-na.ssl-images-amazon.com/images/I/71Ui-NwYUmL.jpg'),
        createBook('Harry Flotzer', 624, 'https://images-na.ssl-images-amazon.com/images/I/71Ui-NwYUmL.jpg'),
        createBook('Harry dgfbbd', 7254, 'https://images-na.ssl-images-amazon.com/images/I/71Ui-NwYUmL.jpg'),
        createBook('Harry Flotzer', 824, 'https://images-na.ssl-images-amazon.com/images/I/71Ui-NwYUmL.jpg'),
        createBook('Harry dgfbbd', 9254, 'https://images-na.ssl-images-amazon.com/images/I/71Ui-NwYUmL.jpg'),
        createBook('Harry dgfbbd', 7254, 'https://images-na.ssl-images-amazon.com/images/I/71Ui-NwYUmL.jpg'),
        createBook('Harry Flotzer', 824, 'https://images-na.ssl-images-amazon.com/images/I/71Ui-NwYUmL.jpg'),
        createBook('Harry dgfbbd', 9254, 'https://images-na.ssl-images-amazon.com/images/I/71Ui-NwYUmL.jpg')];
    }
}

function createBook(name, price, imgUrl) {
    return {
        id: makeId(),
        name: name,
        price: price,
        imgUrl: imgUrl,
        rate: 3
    }
}

function deleteBook(bookId) {
    var bookIdx = gBooks.findIndex(function (book) {
        return book.id === bookId.dataset.bookid;
    });
    gBooks.splice(bookIdx, 1);
    saveToStorage('gBooks', gBooks);

}

function updateBook(bookId) {
    console.log(elBtn)
}

function readBook(elBookId) {
    console.log(elBookId)
}

function addNewBook(title, price) {
    var newBook = createBook(title, price, 'https://images-na.ssl-images-amazon.com/images/I/71Ui-NwYUmL.jpg');
    gBooks.unshift(newBook);

}

function saveUpdate(elId) {

    var bookIdx = gBooks.findIndex(function (book) {
        return book.id === elId;
    });
    var newPrice = $(`#${elId}`).val();

    gBooks[bookIdx].price = newPrice;
    renderList('table');
    doTrans();


}

function saveRate(rate, bookId) {
    var bookIdx = gBooks.findIndex(function (book) {
        return book.id === bookId;
    });
    gBooks[bookIdx].rate = rate;
    saveToStorage('gBooks', gBooks);
}

function sortBy(choiceSort) {
    if (choiceSort === 'Title') {
        return gBooks.sort(sortByTxt);
    } else if (choiceSort === 'Price') {
        return gBooks.sort(sortByNum);
    }
}

function nextPage() {
    var maxNextPage = MAXBOOKS * (gCurrPage + 1);
    if (maxNextPage < gBooks.length) gCurrPage++;
}

function prevPage() {
    if (gCurrPage > 0) gCurrPage--;


}

function goToGallery() {
    window.open(`https://tommanger.github.io/ca-gallery-master/`, '_blank');
}