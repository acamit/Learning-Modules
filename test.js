var x = 0;
function callback(err,result) {
   if (err) {
      x--;
	console.log(err);

      return;
   }

   x++;
}
setTimeout(callback,10);
setTimeout(callback,10, 0);