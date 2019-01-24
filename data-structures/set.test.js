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

	it('should implement basic operations with sets', () => {
		const A = ['1','2','3'];
		const B = ['4','5','6'];
		const AB = ['1','2','3', '4', '5', '6'];
		const C = ['1','2','3', '4', '5'];
		const D = ['4', '5', '6', '7', '8'];
		const IntersectionCD = ['4', '5'];
		const DifferenceCD = ['1','2','3'];

		const a = new Set(A);
		const b = new Set(B);
		const c = new Set(C);
		const d = new Set(D);

		const ab = Set.union(a, b);
		const intersectionCD = Set.intersection(c, d);
		const differenceCD = Set.intersection(c, d);

		expect(ab).to.eql(AB);
		expect(intersectionCD).to.eql(IntersectionCD);
		expect(differenceCD).to.eql(DifferenceCD);
	});

});