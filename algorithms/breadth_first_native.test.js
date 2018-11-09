import {breadthFirst, isSellingMango} from './breadth_first_native.js';
import {fruitSellers} from '../sample/graphs'
import chai from 'chai';

const expect  = chai.expect;

describe('algorithms/breadth_first_native.js', ()=>{

    it('should be defined', () => {
        expect(breadthFirst).to.be.a('function');
    });

    it('default result should be \'oleg\'', () => {
        const result = breadthFirst(fruitSellers, 'pavel', isSellingMango);
        expect(result).to.eql('oleg');
    });
    it('should be able to use custom matcher function', () => {
    	const customMatcher = (val) =>{
    		return val.friends.includes('vladimir');
		};
        const result = breadthFirst(fruitSellers, 'pavel', customMatcher);
        expect(result).to.eql('tania');
    });
    it('return \'null\' when dont find data in list', () => {
    	const customMatcher = (val) =>{
    		return val.friends.includes('pedro');
		};
        const result = breadthFirst(fruitSellers, 'pavel', customMatcher);
        expect(result).to.be.null;
    });

    it('should fail with exception on unappropriated arguments values', () => {
        expect(()=>breadthFirst({})).to.throw(Error, 'Wrong arguments list.');
        expect(()=>breadthFirst(NaN)).to.throw(Error, 'Wrong arguments list.');
        expect(()=>breadthFirst(undefined)).to.throw(Error, 'Wrong arguments list.');
        expect(()=>breadthFirst('undefined')).to.throw(Error, 'Wrong arguments list.');
        expect(()=>breadthFirst('random text')).to.throw(Error, 'Wrong arguments list.');
        expect(()=>breadthFirst(true)).to.throw(Error, 'Wrong arguments list.');

        expect(()=>breadthFirst(true, true, true)).to.throw(Error, 'Wrong arguments list.');
        expect(()=>breadthFirst(NaN, NaN, NaN)).to.throw(Error, 'Wrong arguments list.');
        expect(()=>breadthFirst(null, null, null)).to.throw(Error, 'Wrong arguments list.');
        expect(()=>breadthFirst(undefined, undefined, undefined)).to.throw(Error, 'Wrong arguments list.');
        expect(()=>breadthFirst('undefined', 'undefined', 'undefined')).to.throw(Error, 'Wrong arguments list.');
        expect(()=>breadthFirst('random text', 'random text', 'random text')).to.throw(Error, 'Wrong arguments list.');
        expect(()=>breadthFirst({},{},{})).to.throw(Error, 'Wrong arguments list.');

    })

});