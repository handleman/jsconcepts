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

describe('algorithms/dynamic.js', ()=>{
	const query1 = 'tread';
	const query2 = 'houl';
	const query3 = 'throwout';

	it('should be defined', () => {
		expect(dynamic).to.be.a('function');
	});

	it('should find the longest common subsequence',()=>{
		expect(dynamic(query1, examples).suggestion).equal('thread');
		expect(dynamic(query2, examples).suggestion).equal('thoughtful');
		expect(dynamic(query3, examples).suggestion).equal('blowout');
	});

});