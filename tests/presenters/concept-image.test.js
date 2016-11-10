const ConceptImagePresenter = require('../../presenters/concept-image');
const chai = require('chai');
const expect = chai.expect;
const invalidItems = [
	{
		primaryImage: {
			rawSrc: null
		}
	},
	{
		primaryImage: {
			rawSrc: 'foobar.jpg'
		},
		isPodcast: true
	}
];
const validItems = [
	{
		primaryImage: {
			rawSrc: 'valid1.jpg'
		}
	},
	{
		primaryImage: {
			rawSrc: 'valid2.jpg'
		}
	}
];

describe('Concept Image Presenter', () => {
	it('falls back to a default', () => {
		const inst = new ConceptImagePresenter();
		expect(inst.imageUrl).to.equal('http://com.ft.imagepublish.prod.s3.amazonaws.com/cca52406-bda0-11e5-9fdb-87b8d15baec2');
	});

	it('uses the src the first valid non-podcast item', () => {
		const allItems = invalidItems.concat(validItems);
		const inst = new ConceptImagePresenter({taxonomy: 'brand', items: allItems});
		expect(inst.imageUrl).to.equal('valid1.jpg');
	});

	it('uses the taxonomy image if there is no valid image for the items', () => {
		const inst = new ConceptImagePresenter({taxonomy: 'brand', items: invalidItems});
		expect(inst.imageUrl).to.equal('http://com.ft.imagepublish.prod.s3.amazonaws.com/cca52406-bda0-11e5-9fdb-87b8d15baec2');
	});
});
