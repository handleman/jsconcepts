import fast_sorting from './fast_sorting.js';
import chai from 'chai';

const expect  = chai.expect;
const arrUnsorted = [100, 0, 3, 55, 2, 44444, 3, 4, 5 ,8, 24];
const arrSorted = [0, 2, 3, 3, 4, 5, 8, 24, 55, 100, 44444];

describe('algorithms/fast_sorting.js', ()=>{

	it('should be function', () => {
		expect(fast_sorting).to.be.a('function');
	});

	it('should sort test arrays', () => {
		const result = fast_sorting(arrUnsorted);
	     expect(result).to.eql(arrSorted);
	});

	it('should not fail with exception on unappropriated values', () => {
		expect(fast_sorting(NaN)).to.be.null;
		expect(fast_sorting(undefined)).to.be.null;
		expect(fast_sorting('undefined')).to.be.null;
		expect(fast_sorting('random text')).to.be.null;
		expect(fast_sorting(true)).to.be.null;

	})

});