var express = require('express');
var authRoute = express.Router();
var mongodb = require('mongodb').MongoClient;

var router = function(nav) {
	authRoute.route('/signup')
			.post(function(req, res){
				console.log(req.body);

				/*passport will add login fuction to request.
					this tell passport that user is logged in. 
					We donot call this generally because authenticate will take care of this.
					But here we are createing a new user there for we want to log them in automatically.
				*/
				req.login(req.body, function(){
					res.redirect('/auth/profile');
				});
			});

	authRoute.route('/profile')
			.get(function(req, res){
				//Passport put this user object beacuse User logged in correctly.
				res.json(req.user);
			});	
	return authRoute;
};

module.exports = router;