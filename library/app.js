var express = require('express');
var app = express();

var nav = [{Link:'/Books', Text:'Books'}, {Link:'/Author', Text:'Author'}];
var bookRouter = require('./src/routes/bookRoutes')(nav);

var port = process.env.PORT|| 5000;


//app.use is use to setup middleware. This is used by express first before anything else.  here we set up a public directory
app.use(express.static('public'));
// app.use(express.static('src/views'));
app.set('views', './src/views');
/*var handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({extname:'.hbs'}));
*/
// app.set('view engine' , '.hbs');
var ejs = require('ejs');
app.set('view engine' , 'ejs');
app.use('/Books' , bookRouter);

app.get('/', function (req, res) {
	res.render('index', {nav:[{Link:'/Books', Text:'Books'}, {Link:'/Author', Text:'Author'}], title:'My title'});
});


app.listen(port, function(err){
	console.log('listening on port ' + port);
});