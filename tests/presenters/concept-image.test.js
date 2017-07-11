const ConceptImagePresenter = require('../../presenters/concept-image');
const chai = require('chai');
const expect = chai.expect;
const invalidItems = [
	{
		mainImage: {
			url: null
		}
	},
	{
		mainImage: {
			url: 'foobar.jpg'
		},
		isPodcast: true
	}
];
const validItems = [
	{
		mainImage: {
			url: 'valid1.jpg'
		}
	},
	{
		mainImage: {
			url: 'valid2.jpg'
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
		const inst = new ConceptImagePresenter({items: allItems});
		expect(inst.imageUrl).to.equal('valid1.jpg');
	});
});
