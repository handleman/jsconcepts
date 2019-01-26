import Set from './set.js';
import chai from 'chai';

const expect  = chai.expect;

describe('data-structures/set.js', ()=>{

	it('should have all standard interface methods', () => {
		const set = new Set(['1','2','3']);
		expect(set).to.be.an('object').that.is.not.empty;
        expect(set).to.respondTo('add');
        expect(set).to.respondTo('get');
        expect(Set).itself.to.respondTo('union');
        expect(Set).itself.to.respondTo('intersection');
        expect(Set).itself.to.respondTo('difference');
	});

	it('should be initialized correctly', () => {
		const checkSet= ['1','2','3'];
        const set = new Set(checkSet);
        expect(set.get()).to.be.an('array');
        expect(set.get()).eql(checkSet);

	});

    it('should implement \'add\' operation on set', ()=>{
        const A = ['1','2','3'];
        const B = ['4','5','6'];
        const AB = ['1','2','3', '4', '5', '6'];
        const a = new Set(A);

        a.add(B);

        expect(a.get()).eql(AB);

    });
	it('should implement \'union\' operation on sets', ()=>{
		const A = ['1','2','3'];
		const B = ['4','5','6'];
		const AB = ['1','2','3', '4', '5', '6'];
		const a = new Set(A);
		const b = new Set(B);

		expect(Set.union(a, b).get()).to.eql(AB);
		expect(Set.union(A, B).get()).to.eql(AB);

		expect(()=>{Set.union(A)}).to.throw(TypeError);
		expect(()=>{Set.union(A)}).to.throw(TypeError);
		expect(()=>{Set.union(A, b)}).to.throw(TypeError);
		expect(()=>{Set.union(a, B)}).to.throw(TypeError);
		expect(()=>{Set.union(0, 0)}).to.throw(TypeError);
		expect(()=>{Set.union(null)}).to.throw(TypeError);
		expect(()=>{Set.union(undefined, undefined)}).to.throw(TypeError);
		expect(()=>{Set.union()}).to.throw(TypeError);

	});
	it('should implement \'intersection\' operation on sets', ()=>{
		const C = ['1','2','3', '4', '5'];
		const D = ['4', '5', '6', '7', '8'];
		const c = new Set(C);
		const d = new Set(D);
		const intersectionCD = Set.intersection(c, d);
		expect(intersectionCD).to.eql(IntersectionCD);
	});
	it('should implement \'difference\' operation on sets', ()=>{
		const C = ['1','2','3', '4', '5'];
		const D = ['4', '5', '6', '7', '8'];
		const c = new Set(C);
		const d = new Set(D);
		const differenceCD = Set.intersection(c, d);
		expect(differenceCD).to.eql(DifferenceCD);
	});


});