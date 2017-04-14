var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(){
	passport.use(new LocalStrategy( {
		//Tell passport which is username field and password field.
		usernameField:'userName',
		passwordField:'password'
	},
	function(username , password , done){
		//logic for authentication
		var user ={
			username:username,
			password:password
		};

		//this will put the user variable back to request params
		done(null, user);
	} 
	));
};