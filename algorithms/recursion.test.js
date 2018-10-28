import {look_for_key_in_box, sum} from './recursion.js';
import chai from 'chai';

import {pileOfBoxes} from '../sample/graphs.js';

const expect = chai.expect;

describe('algorithms/recursion.js', ()=>{
    describe('recursion search: look_for_key_in_box()', ()=>{
       it('should be function', ()=>{
          expect(look_for_key_in_box).to.be.a('function');
       });
       it('should find box with key inside', ()=>{
           const result = look_for_key_in_box(pileOfBoxes);
           expect(result.id).to.equal(22);
           expect(result.hasKey).to.be.true;
       });
        it('should not fail with exception on unappropriated values', () => {
            expect(look_for_key_in_box(NaN)).to.be.null;
            expect(look_for_key_in_box(undefined)).to.be.null;
            expect(look_for_key_in_box(null)).to.be.null;
            expect(look_for_key_in_box('undefined')).to.be.null;
            expect(look_for_key_in_box('random text')).to.be.null;
            expect(look_for_key_in_box(true)).to.be.null;

        });
    });

    describe('recursion sum function', ()=>{
        it('should be function', ()=>{
            expect(sum).to.be.a('function');
        });
        it('should sum give sum of array elements as a result', ()=>{
            const elements = [1,2,3,4,5,6,7,8,9,10];
            const elements_sum = 55;
            const result = sum(elements);
            expect(result).to.equal(elements_sum);
        });
        it('should not fail with exception on unappropriated values', () => {
            expect(sum(NaN)).to.be.null;
            expect(sum(undefined)).to.be.null;
            expect(sum('undefined')).to.be.null;
            expect(sum('random text')).to.be.null;
            expect(look_for_key_in_box(null)).to.be.null;
            expect(sum(true)).to.be.null;

        });
    });
});