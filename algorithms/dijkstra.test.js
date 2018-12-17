import {dijkstra, calculateCosts} from './dijkstra';
import {cities, citiesCosts} from '../sample/graphs'
import chai from 'chai';

const expect  = chai.expect;

describe('algorithms/dijkstra.js', ()=>{

	it('should be defined', () => {
		expect(dijkstra).to.be.a('function');
	});
	it('should return proper data format', () => {
		const shortPath = dijkstra(cities);
		expect(shortPath).to.be.a('object').that.have.all.own.keys('path','value');
		expect(shortPath.path).to.be.a('array');
		expect(shortPath.value).to.be.a('number')
	});
	it('should build initial costs hash table', () =>{
		const costs = calculateCosts(cities, 'hrodna');
		console.log('citiesCosts: ', citiesCosts);
		expect(costs).to.deep.equal(citiesCosts);
	});



});