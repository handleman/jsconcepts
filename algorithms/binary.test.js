import binary_search from './binary.js';
import chai from 'chai';

const expect  = chai.expect;
const arrUnsorted = [100, 0, 3, 55, 2, 44444, 3, 4, 5 ,8, 24];
const arrSorted = [0, 2, 3, 3, 4, 5, 8, 24, 55, 100, 44444];

describe('algorithms/binary.js', ()=>{

    it('should be defined', () => {
        expect(binary_search).to.be.a('function');
    });

    it('should find value in sorted array', () => {
        expect(binary_search(arrSorted, 55)).to.equal(8);
        expect(binary_search(arrSorted, 0)).to.equal(0);
        expect(binary_search(arrSorted, 44444)).to.equal(10);
    });
    it('should not find value in unsorted array and return null instead', () => {
        expect(binary_search(arrUnsorted, 55)).to.be.null;
        expect(binary_search(arrUnsorted, 0)).to.be.null;
        expect(binary_search(arrUnsorted, 44444)).to.be.null;
    });

    it('should not fail with exception on unappropriated values', () => {
        expect(binary_search(arrSorted, NaN)).to.be.null;
        expect(binary_search(arrSorted, undefined)).to.be.null;
        expect(binary_search(arrSorted, 'undefined')).to.be.null;
        expect(binary_search(arrSorted, 'random text')).to.be.null;
        expect(binary_search(arrSorted, true)).to.be.null;
        expect(binary_search(arrSorted, true)).to.be.null;

        expect(binary_search(NaN, 55)).to.be.null;
        expect(binary_search(undefined, 55)).to.be.null;
        expect(binary_search('undefined', 55)).to.be.null;
        expect(binary_search('random text', 55)).to.be.null;
        expect(binary_search(true, 55)).to.be.null;
        expect(binary_search(true, 55)).to.be.null;


        expect(binary_search(arrSorted, 7)).to.be.null;


    })

});