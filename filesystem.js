var fs = require('fs');
if(fs.existsSync('temp')){
	console.log("Directory exists. Removing... ");

	if(fs.existsSync('temp/new.txt')){
		fs.unlinkSync('temp/new.txt');
	}

	fs.rmdir('temp');
}

fs.mkdirSync('temp');
if(fs.existsSync('temp')){
	process.chdir('temp');
	fs.writeFileSync('test.txt', "this is the test text for the file");
	fs.renameSync('test.txt', 'new.txt');

	console.log('File has size :' + fs.statSync('new.txt').size + 'bytes');
	console.log('File has size :' + fs.readFileSync('new.txt').toString());
}