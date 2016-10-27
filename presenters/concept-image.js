'use strict';
const taxonomyImages = {
	authors: 'http://com.ft.imagepublish.prod.s3.amazonaws.com/cca52406-bda0-11e5-9fdb-87b8d15baec2',
	brand: 'http://com.ft.imagepublish.prod.s3.amazonaws.com/cca52406-bda0-11e5-9fdb-87b8d15baec2',
	organisations: 'http://com.ft.imagepublish.prod.s3.amazonaws.com/cca52406-bda0-11e5-9fdb-87b8d15baec2',
	people: 'http://com.ft.imagepublish.prod.s3.amazonaws.com/cca52406-bda0-11e5-9fdb-87b8d15baec2',
	regions: 'http://com.ft.imagepublish.prod.s3.amazonaws.com/cca52406-bda0-11e5-9fdb-87b8d15baec2',
	specialReports: 'http://com.ft.imagepublish.prod.s3.amazonaws.com/cca52406-bda0-11e5-9fdb-87b8d15baec2',
	topics: 'http://com.ft.imagepublish.prod.s3.amazonaws.com/cca52406-bda0-11e5-9fdb-87b8d15baec2',
	'default': 'http://com.ft.imagepublish.prod.s3.amazonaws.com/cca52406-bda0-11e5-9fdb-87b8d15baec2'
};

/**
* @param {String} taxonomy name of concept type e.g. authors
* @param {Object} items list of article items
**/
class ConceptImagePresenter {
	constructor (data) {
		this.data = data;
	}
	get imageUrl () {
		if (!this.data || !this.data.items) {
			return taxonomyImages.default;
		}
		const findItemImage = this.data.items.find( item => {
			return item.primaryImage && item.primaryImage.rawSrc && !item.isPodcast;
		});
		const conceptImage = findItemImage && findItemImage.primaryImage.rawSrc;

		return conceptImage || taxonomyImages[this.data.taxonomy] || taxonomyImages.default;
	}
}

module.exports = ConceptImagePresenter;
