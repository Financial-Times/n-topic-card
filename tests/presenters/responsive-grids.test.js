const ResponsiveGridsPresenter = require('../../presenters/responsive-grids');
const chai = require('chai');
const expect = chai.expect;

describe('Responsive Grids Presenter', () => {
	it('returns an empty string if no show data', () => {
		const inst = new ResponsiveGridsPresenter();
		expect(inst.responsiveGrids).to.equal('');
	});

	it('sets things marked true to 12 and things marked false to 0', () => {
		const inst = new ResponsiveGridsPresenter({
			'show': {default: true, M: false, XL: true}
		});
		expect(inst.responsiveGrids).to.equal('12 M0 XL12');
	});
});
