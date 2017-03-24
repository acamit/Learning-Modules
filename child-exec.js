var exec = require('child_process').exec;
var child = exec('uptime | cut -d ', function(err, stdout, stderr){
	if(err){
		console.log(err);
	}else{
		console.log('Outpuit is ' + stdout);
	}
});

console.log("Id is "+ child.id);