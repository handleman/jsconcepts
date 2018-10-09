import Stack from './stack.js';
import chai from 'chai';

const expect = chai.expect;

describe('data-structures/stack.js', ()=>{

	it('should have all standard interface methods', () => {
		const stack = new Stack;
		expect(stack).to.be.an('object').that.is.not.empty;
		expect(stack).to.respondTo('length');
		expect(stack).to.respondTo('push');
		expect(stack).to.respondTo('pop');
	});

	it('should be initialized correctly', ()=>{
		const stack = new Stack;
		expect(stack.length()).equal(0);
		expect(stack.pop()).to.be.null;
		expect(stack.length()).equal(0);

	});

	it('Return last element when pop ( LIFO principles).', ()=>{
		const stack = new Stack;
		for(let i = 1; i <= 100; i++){
			stack.push(i);
		}
		expect(stack.pop()).to.equal(100);
		expect(stack.length()).to.equal(99);
	});


});
