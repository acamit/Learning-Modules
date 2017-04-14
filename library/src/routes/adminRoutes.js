var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

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
var router = function(nav){
	adminRouter.route('/addBooks')
				.get(function(req, res){
					var url='mongodb://localhost:27017/LibraryApp';
					mongodb.connect(url, function(err, db){
						var collection = db.collection('books');
						collection.insertMany(books, function(err, result){
							res.send(result);
							db.close();
						});
					});
				});
	return adminRouter;
}

module.exports = router;