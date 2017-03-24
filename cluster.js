var cluster = require('cluster');
var http = require('http');
var numWorkers = 2;
if(cluster.isMaster){
	for(var i =0;i<numWorkers;i++){
		console.log("master: about to fork a worker");
		cluster.fork();
	}

	cluster.on('fork', function(worker){
		console.log('fork event worker ' + worker.id );
	});
	cluster.on('online', function(worker){
		console.log('Online event worker ' + worker.id );
	});

	cluster.on('listening', function(worker, address){
		console.log('master : listening event (worker' + worker.id+ ' ) pid ' + process.id + ' , ' + address.address +' : ' + address.port);
	});

	cluster.on('exit', function(worker, code, signal){
		console.log('master: exit event '+ worker.id);
	});
}else{
	console.log('worker : worker # ' + cluster.worker.id + ' ready !');

	var count = 0;
	http.createServer(function(req, res){
		res.writeHead(200);
		count++;

		console.log('Worker #' + cluster.worker.id + ' is incrementing to ' + count);
		res.end("Worker #" + cluster.worker.id + " count " + count + "\n");

		if(count==3){
			cluster.worker.destroy();
		}
	}).listen(8000, '127.0.0.1');
}