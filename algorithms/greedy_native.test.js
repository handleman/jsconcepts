import {greedy} from './greedy_native.js';
import {radio} from '../sample/graphs';

import chai from 'chai';

const expect  = chai.expect;

const coveragePlan = ['hrodna', 'minsk', 'vitebsk', 'bobruisk', 'slonim', 'gomel', 'brest', 'lida', 'pinsk'];
const rightStations = [
	'Unistar',
    'Русское Радио',
    'Альфа Радио'
];

describe('algorithms/greedy_native.js', ()=>{

	it('should be defined', () => {
		expect(greedy).to.be.a('function');
	});
	it('should return proper data format', () => {
		const optimum = greedy(radio, coveragePlan);
		expect(optimum).to.be.an('array');
	});

	it('should find shortest path ', ()=>{
		const results = greedy(radio, coveragePlan);
		expect(results).to.deep.equal(rightStations);

	});
	it('should throw exceptional errors on wrong data provided', ()=>{
		expect(()=>greedy()).to.throw(Error);
		expect(()=>greedy(null)).to.throw(Error);
		expect(()=>greedy({})).to.throw(Error);
		expect(()=>greedy(undefined)).to.throw(Error);
		expect(()=>greedy(NaN)).to.throw(Error);
		expect(()=>greedy(null, null, null)).to.throw(Error);
		expect(()=>greedy(undefined, undefined, undefined)).to.throw(Error);
		expect(()=>greedy(NaN, NaN, NaN)).to.throw(Error);
		expect(()=>greedy(radio, NaN, NaN)).to.throw(Error);
		expect(()=>greedy(radio, null, NaN)).to.throw(Error);
		expect(()=>greedy(radio, 'hrodna')).to.throw(Error);
		expect(()=>greedy(radio, 'hrodna', null)).to.throw(Error);
		expect(()=>greedy(radio, 'hrodna', NaN)).to.throw(Error);
		expect(()=>greedy(radio, undefined, 'vitebsk')).to.throw(Error);
		expect(()=>greedy(radio, null, 'vitebsk')).to.throw(Error);
		expect(()=>greedy(radio, NaN, 'vitebsk')).to.throw(Error);
		expect(()=>greedy(radio, NaN, 'vitebsk')).to.throw(Error);
	});

});