const viewports = process.env.PA11Y_VIEWPORTS || [
	{
		width: 1440,
		height: 1220
	}
];

const urls = ['http://localhost:5005/'];

const config = {
	defaults: {
		timeout: 50000,
		hideElements: 'iframe[src*=google],iframe[src*=proxy]',
		rules: ['Principle1.Guideline1_3.1_3_1_AAA']
	},
	urls: []
};

for (let viewport of viewports) {
	for (let url of urls) {
		config.urls.push({
			url,
			viewport
		});
	}
}

module.exports = config;
