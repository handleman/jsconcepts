import {look_for_key_in_box} from './recursion.js';
import chai from 'chai';

import {pileOfBoxes} from '../sample/graphs.js';
import fast_sorting from "./fast_sorting";

const expect = chai.expect;

describe('algorithms/recursion.js', ()=>{
    describe('recursion search look_for_key_in_box()', ()=>{
       it('should be function', ()=>{
          expect(look_for_key_in_box).to.be.a('function');
       });
       it('should find box with key inside', ()=>{
           const result = look_for_key_in_box(pileOfBoxes);
           expect(result.hasKey).to.be.true;
       });
        it('should not fail with exception on unappropriated values', () => {
            expect(fast_sorting(NaN)).to.be.null;
            expect(fast_sorting(undefined)).to.be.null;
            expect(fast_sorting('undefined')).to.be.null;
            expect(fast_sorting('random text')).to.be.null;
            expect(fast_sorting(true)).to.be.null;

        });
    });
});