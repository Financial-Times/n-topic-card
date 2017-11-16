'use strict';

const ResponsiveGridsPresenter = require('./responsive-grids');

/**
* Combine both presenters for use with concepts
* @param {Object} items - see ConceptImagePresenter
* @param {Object} show - see ResponsiveGridsPresenter
**/
class ConceptPresenter {
	constructor (data) {
		this.data = data;
	}

	get responsiveGrids () {
		if (this.data && this.data.show) {
			const rgrids = new ResponsiveGridsPresenter({show: this.data.show});
			return rgrids.responsiveGrids;
		}
	}
}

module.exports = ConceptPresenter;
