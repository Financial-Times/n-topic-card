'use strict';

const fallbackImage = 'http://com.ft.imagepublish.prod.s3.amazonaws.com/cca52406-bda0-11e5-9fdb-87b8d15baec2';

/**
* @param {Object} items list of article items
* @return {String} url of an image
**/
class ConceptImagePresenter {
	constructor (data) {
		this.data = data;
	}
	get imageUrl () {
		if (!this.data || !this.data.items) {
			return fallbackImage;
		}
		const findImageItem = this.data.items.find( item => {
			return item.mainImage && item.mainImage.url && !item.isPodcast;
		});
		const conceptImage = findImageItem && findImageItem.mainImage.url;
		return conceptImage || fallbackImage;
	}
}

module.exports = ConceptImagePresenter;
