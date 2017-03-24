var os = require('os');
var mathfun = require('./mathfun');


var toMb = function(f){
	return (Math.round((f/1024/1024)*100)/100);
}
	console.log(os.hostname());
	console.log(os.loadavg()[2]);

	console.log( toMb(os.freemem() ) + 'of' + toMb(os.totalmem() ) + 'Mb Free'  );


var processResults = function(err,results, time) {
	if(err){
		console.log(err.message);
	}else{
		console.log("The results are : " + results + " (" + time + "ms)");
	}
};

mathfun.evenDoubler(2, processResults);
mathfun.evenDoubler(3, processResults);
console.log(mathfun.foo);