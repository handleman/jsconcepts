import Stack from './stack.js';
import chai from 'chai';

const expect = chai.expect;

describe('stack.js', ()=>{

	it('New stack should be empty, able to increase and decrease on purpose.', ()=>{
		const stack = new Stack;
		expect(stack.length()).to.be.a('number').that.equal(0);
		stack.push(10);
		expect(stack.length()).to.equal(1);
		expect(stack.pop()).to.equal(10);
		expect(stack.length(), 'when stack is empty').to.equal(0);
	});

	it('Return last element when pop ( LIFO principles).', ()=>{
		const stack = new Stack;
		for(let i = 1; i <= 100; i++){
			stack.push(i);
		}
		expect(stack.pop()).to.equal(100);
		expect(stack.length()).to.equal(99);
	});

	it('return null value in case there is no elements inside', ()=>{
		const stack = new Stack;
		expect(stack.length()).equal(0);
		expect(stack.pop()).to.be.null;
	});

});
