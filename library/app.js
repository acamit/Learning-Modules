var express = require('express');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();

//app.use is use to setup middleware. This is used by express first before anything else.  here we set up a public directory

app.use(bodyParser.json({
	extended: true
}));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(cookieParser());
app.use(session({secret:'library'}))
require('./src/config/passport')(app);
app.use(express.static('public'));
app.set('views', './src/views');

var port = process.env.PORT|| 5000;



var nav = [{Link:'/Books', Text:'Books'}, {Link:'/Author', Text:'Author'}];
var bookRouter = require('./src/routes/bookRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);
var authRouter = require('./src/routes/authRoutes')(nav);


/*var handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({extname:'.hbs'}));
*/
// app.set('view engine' , '.hbs');
var ejs = require('ejs');
app.set('view engine' , 'ejs');
app.use('/Books' , bookRouter);
app.use('/Admin' , adminRouter);
app.use('/Auth' , authRouter);

app.get('/', function (req, res) {
	res.render('index', {nav:[{Link:'/Books', Text:'Books'}, {Link:'/Author', Text:'Author'}], title:'My title'});
});


app.listen(port, function(err){
	console.log('listening on port ' + port);
});