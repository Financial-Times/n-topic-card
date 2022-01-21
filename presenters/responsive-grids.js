'use strict';
/**
* builds a value for data-o-grid-colspan that will show or hide a card depending
* @param {Object} show using o-grid breakpoints, sets up a grid colspan value to display the section (or not)
* e.g. show: { default: true, M: false, XL: true }
* NB if you are thinking about setting something other than 12 on n-topic-card section, you should wrap n-topic-card in something instead
**/
class ResponsiveGridsPresenter {
	constructor (data) {
		this.data = data;
	}

	/**
	* @returns {String} string that can be used by o-grid e.g. 12 M0 XL12
	**/
	get responsiveGrids () {
		if (!this.data || !this.data.show) {
			return '';
		}
		const gridRules = Object.keys(this.data.show).map(breakpoint => {
			if (breakpoint === 'default') {
				return this.showOrHide(breakpoint);
			} else {
				return `${breakpoint}${this.showOrHide(breakpoint)}`;
			}

		});
		return gridRules.join(' ');
	}

	//if true use 12, if false use 0
	showOrHide (breakpoint) {
		return (this.data.show[breakpoint]) ? '12': '0';
	}
}

module.exports = ResponsiveGridsPresenter;
