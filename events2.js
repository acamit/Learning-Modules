var Resource = require('./resource.js');

var r = new Resource(7);

r.on('start', function(){
	console.log("I have started");
});

r.on('data', function(d) {
	console.log("I have received " + d);
});

r.on('end', function(t) {
	console.log("I'm done with " + t+ "data events");
});