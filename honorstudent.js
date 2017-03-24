var fun = require('./mathfun');
process.on('message', function(m){
	if(m.cmd=='double'){
		console.log("Doubling this " + m.number);
		fun.evenDoubler(m.number, function(err, result){
			process.send({answer:result});
		});
	}else if(m.cmd=='done'){
		process.exit();	
	}
});