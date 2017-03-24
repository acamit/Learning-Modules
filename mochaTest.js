var should = require('should');
var fun = require('./mathfun');
//Test suites
describe('MathFun', function(){
	describe('when used synchronously', function(){
		//indiviual 
		it('should double even numbers correctly', function(){
			fun.evenDoublerSync(2).should.equal(4);
		});
		//it.only(It will run only this one test chase. )
		//it.skip(It will skip only this one test chase. )

		it('should throw on odd numbers', function(done){
			(function(){fun.evenDoublerSync(3)}).should.throw('Odd Input');
			done();
		});

	});
});