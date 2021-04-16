const express = require('express');
const router = express.Router();

const controller = require('../controller');

router.get('/',(req,res)=>{
    res.send('Welcome to my library')
})

router.get('/books',(req,res)=>{
    const data = controller.getAll()
    res.send(data);
})

router.get('/book/:code',(req,res)=>{
    let code = req.params.code;
    const data = controller.getByCode(code);
    res.send(data)
})

router.post('/addBook',(req,res)=>{
    const newBook = {
        code: req.body.code,
        name: req.body.name
    }
    controller.addNewBook(newBook)
    res.send('Book added!!')
    
})

router.post('/deleteBook',(req,res)=>{
    let code = req.body.code
    controller.deleteBookByCode(code)
    res.send('Book Deleted!!')
})

module.exports = router;

