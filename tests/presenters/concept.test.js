const ConceptPresenter = require('../../presenters/concept');
const chai = require('chai');
const expect = chai.expect;

describe('Concept Presenter', () => {
	it('has a responsiveGrids getter that returns a string', () => {
		const inst = new ConceptPresenter({'show': {}});
		expect(typeof inst.responsiveGrids).to.equal('string');
	});
});
