const Concept = require('../presenters/concept.js');

module.exports = (context, options) => {
	if (options.data) {
		const data = Object.assign({}, context, options.hash);
		const conceptPresenter = new Concept(data);
		const extraData = {
			imageUrl: conceptPresenter.imageUrl,
			responsiveGrids: conceptPresenter.responsiveGrids
		}
		const concept = Object.assign(data, extraData);
		return options.fn(concept);
	}
};
