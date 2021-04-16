const bookAdaptor = require('./lib/books-adaptor');

const getAll = ()=>{
    const books = bookAdaptor.getAll();
    return books;
}

const getByCode = (code)=>{
    const book = bookAdaptor.getByCode(code);
    return book;
}

const addNewBook = (book)=>{
    bookAdaptor.addNewBook(book)
}

const deleteBookByCode = (code)=>{
    bookAdaptor.deleteBookByCode(code)
}

module.exports = { getAll, getByCode, addNewBook, deleteBookByCode};