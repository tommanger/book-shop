'use strict'

function init(){
    createBooks();
    doTrans();
    renderList('table');
}

function renderList(choice){
    doTrans();

    var booksHTMLs;
    if(choice === 'table'){
        booksHTMLs = getBooksTableHTML()
    } else {

    }
    $('.books-list').html(booksHTMLs);
}

function getBooksTableHTML() {
    var books = getBooks();
    doTrans();

    var strHTMLs = books.map(function(book){
        return `<tr>
                        <th scope="row">${book.id}</th>
                            <td>${book.name}</td>
                            <td>$${book.price}</td>
                            <td>
                            <button data-trans="buttonReadTrans" type="button" class="btn btn-primary" data-toggle="modal" data-target="#book-details" onclick="onReadClick('${book.id}')">Read</button> 
                            <button data-trans="buttonUpdateTrans" onclick="onUpdateBook('${book.price}',this,'${book.id}')" type="button" class="btn btn-secondary bg-warning">Update</button>
                            <button data-trans="buttonDeleteTrans" onclick="onDeleteBook('${book.id}')" type="button" class="btn btn-success bg-danger">Delete</button>
                        </td>
                        <td><img width="30px" src="${book.imgUrl}"></td>

                    </tr>`
    })
    return strHTMLs.join();
    
}

function onDeleteBook(elBookId){
    if(confirm('are you sure?')){
        deleteBook(elBookId);
        renderList('table');
        doTrans();
    }

}

function onUpdateBook(price, elTd, elId){
    elTd.parentElement.parentElement.children[2].innerHTML = `<div class="input-group mb-3">
                                                                 <div class="input-group-prepend">
                                                                   <button data-trans="buttonSaveTrans" class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="saveUpdate('${elId}')">Save</button>
                                                                </div>
                                                                     <input style="flex:unset; min-width: 4rem;" id="${elId}" type="text" class="form-control" value="${price}" aria-label="Example text with button addon" aria-describedby="button-addon1">
                                                                </div>`;
 doTrans();

}

function onReadBook(elBookId){
    readBook(elBookId)
}

function readAndAddNewBook(){
    var $title = $('#title-input');
    var $price = $('#price-input');
    if($title.val() && $price.val()){
        addNewBook($title.val(),$price.val());
        $title.val('');
        $price.val('');
        renderList('table');
    }
    doTrans();
}

function onReadClick(bookid){
    
    var books = getBooks();
    var book = getItemByID(bookid,books);
    $('.read-book-modal').html(`<img width="300px" src="${book.imgUrl}">
    <h1>${book.name}</h1>
    <h4><span data-trans="newBookModalPriceNewTrans">Price:</span> ${book.price}</h4>
    <h6 class="book-id" id="${book.id}"><span data-trans="idTrans">Book-ID</span>: ${book.id}</h6>`);
    $('#rate').text(book.rate);
    doTrans();
}

function onUpdateRate(val){
    var rate = $('#rate').text();
    if(val === '+' && rate < 10) $('#rate').text(++rate);
    else if (val === '-' && rate > 0) $('#rate').text(--rate);
    
    doTrans();
}

function onSaveRate(){
    var rate = $('#rate').text();
    var bookId = $('.book-id')['0'].id;
    saveRate(rate,bookId);
}

function onClickSort(el){
    sortBy(el);
    renderList('table');
    doTrans();
}


function onNextPage(){
    nextPage();
    renderList('table');
    doTrans();
}

function onPrevPage(){
    prevPage();
    renderList('table');
    doTrans();
}


function onChangeLang(lang){
    changeLang(lang);
}