const books = require('../data/books.json')
const fs = require('fs');

const getAll = ()=>{
    return books;
}

const getByCode = (code)=>{
    return books.filter(book => book.code === code);
}

const addNewBook = (book)=>{
    const newBookArr = books.push(book);
    const json = JSON.stringify(books);
    fs.writeFile('data/books.json',json,(err,data)=>{
        if(err){
            console.log(err)
        }else{
            console.log('data added!')
        }
    })
}

const deleteBookByCode = (code)=>{
    let deletedBooksArr = books.filter(book => book.code !== code);
    const json = JSON.stringify(deletedBooksArr)
    fs.writeFile('data/books.json',json,(err,data)=>{
        if(err){
            console.log(err)
        }else{
            console.log('data added by deleting..')
        }
    })
}

module.exports = {getAll, getByCode, addNewBook, deleteBookByCode}