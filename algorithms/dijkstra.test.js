import {dijkstra, calculateCosts} from './dijkstra';
import {cities, cititesCostsResults, citiesPathResult} from '../sample/graphs'
import chai from 'chai';
import {breadthFirst} from "./breadth_first";

const expect  = chai.expect;

describe('algorithms/dijkstra.js', ()=>{

	it('should be defined', () => {
		expect(dijkstra).to.be.a('function');
	});
	it('should return proper data format', () => {
		const shortPath = dijkstra(cities, 'hrodna', 'vitebsk');
		expect(shortPath).to.be.a('object').that.have.all.own.keys('path','value');
		expect(shortPath.path).to.be.a('array');
		expect(shortPath.value).to.be.a('number')
	});
	it('should build initial costs hash table', () =>{
		const costs = calculateCosts(cities, 'hrodna');
		expect(costs).to.deep.equal(cititesCostsResults);
	});

	it('should find shortest path and return rithg values', ()=>{
		const results = dijkstra(cities, 'hrodna', 'vitebsk');
		expect(results).to.deep.equal(citiesPathResult);

	});
	it('should throw exceptional errors on wrong data provided', ()=>{
		expect(()=>dijkstra()).to.throw(Error);
		expect(()=>dijkstra(null)).to.throw(Error);
		expect(()=>dijkstra({})).to.throw(Error);
		expect(()=>dijkstra(undefined)).to.throw(Error);
		expect(()=>dijkstra(NaN)).to.throw(Error);
		expect(()=>dijkstra(null, null, null)).to.throw(Error);
		expect(()=>dijkstra(undefined, undefined, undefined)).to.throw(Error);
		expect(()=>dijkstra(NaN, NaN, NaN)).to.throw(Error);
		expect(()=>dijkstra(cities, NaN, NaN)).to.throw(Error);
		expect(()=>dijkstra(cities, null, NaN)).to.throw(Error);
		expect(()=>dijkstra(cities, 'hrodna')).to.throw(Error);
		expect(()=>dijkstra(cities, 'hrodna', null)).to.throw(Error);
		expect(()=>dijkstra(cities, 'hrodna', NaN)).to.throw(Error);
		expect(()=>dijkstra(cities, undefined, 'vitebsk')).to.throw(Error);
		expect(()=>dijkstra(cities, null, 'vitebsk')).to.throw(Error);
		expect(()=>dijkstra(cities, NaN, 'vitebsk')).to.throw(Error);
	});





});