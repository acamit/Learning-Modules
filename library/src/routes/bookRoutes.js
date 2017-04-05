var express = require('express');
var bookRouter = express.Router();
var router = function(nav){

    var books = [
    {
        title:'War and Peace',
        Author:'Amit Chawla'
    },{
        title:'War and Peace',
        Author:'Amit Chawla'
    },{
        title:'War and Peace',
        Author:'Amit Chawla'
    },{
        title:'War and Peace',
        Author:'Amit Chawla'
    },{
        title:'War and Peace',
        Author:'Amit Chawla'
    },{
        title:'War and Peace',
        Author:'Amit Chawla'
    },{
        title:'War and Peace',
        Author:'Amit Chawla'
    },{
        title:'War and Peace',
        Author:'Amit Chawla'
    },{
        title:'War and Peace',
        Author:'Amit Chawla'
    }];
    bookRouter.route('/')
                .get(function(req, res) {
                    res.render('bookListView', {books:books, nav:nav, title:'Books'});
    });
    bookRouter.route('/:id')
            .get(function(req, res) {
                var id = req.params.id;
                res.render('bookView', {book:books[id], nav:nav, title:'Books'});
    });
    
    return bookRouter;

}
module.exports = router;