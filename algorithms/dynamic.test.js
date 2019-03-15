import {dynamic} from './dynamic.js';

import chai from 'chai';

const expect  = chai.expect;

const examples = [
	'goat',
	'boat',
	'blowout',
	'thoughtful',
	'treat',
	'through',
	'thread'
];
const examples1 = [
	'thread'
];

describe('algorithms/dynamic.js', ()=>{
	const query1 = 'tread';
	const query2 = 'houl';
	const query3 = 'showout';

	it('should be defined', () => {
		expect(dynamic).to.be.a('function');
	});

	it('should find the longest common subsequence',()=>{
		expect(dynamic(query1, examples)).equal('thread');
		expect(dynamic(query2, examples)).equal('thoughtful');
		expect(dynamic(query3, examples)).equal('blowout');
	});

});