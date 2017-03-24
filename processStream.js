process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) {
	process.stdout.write('Data ->' + chunk);
});

process.on('SIGINT', function(){
	process.stderr.write('End');
	process.exit();
});


process.on('SIGTERM', function(){
	process.stderr.write('Why are you terminating me? ');
	
});
console.log("Node is running as process" + process.pid);