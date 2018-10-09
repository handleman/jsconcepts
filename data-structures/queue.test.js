import Queue from './queue.js';
import chai from 'chai';

const expect  = chai.expect;

describe('data-structures/queue.js', ()=>{

	it('should have all standard interface methods', () => {
		const queue = new Queue();
		expect(queue).to.be.an('object').that.is.not.empty;
		expect(queue).to.respondTo('length');
		expect(queue).to.respondTo('push');
		expect(queue).to.respondTo('pop');
		expect(queue).to.respondTo('pop');
	});

	it('should be initialized correctly', () => {
		const queue = new Queue();
		expect(queue.length()).to.equal(0);
		expect(queue.pop()).to.be.null;
		expect(queue.length()).to.equal(0);
	});

	it('should work accordingly FIFO principle', () => {
		const queue = new Queue();
		for(let i = 1; i <= 100; i++){
			queue.push(i);
		}
		expect(queue.length()).to.equal(100);
		expect(queue.pop()).to.equal(1);
		expect(queue.length()).to.equal(99);
	});

});