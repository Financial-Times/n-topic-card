const viewports = process.env.PA11Y_VIEWPORTS || [
	{
		width: 1440,
		height: 1220
	}
];

const urls = ['http://localhost:5005/'];

const config = {
	defaults: {
		page: {},
		timeout: 50000,
		hideElements: 'iframe[src*=google],iframe[src*=proxy]',
		rules: ['Principle1.Guideline1_3.1_3_1_AAA']
	},
	urls: []
};

for (let viewport of viewports) {
	for (let url of urls) {
		url.viewport = viewport;
		config.urls.push(url);
	}
}

module.exports = config;
